import { User } from "./user.model";
import Knex from "knex";
import { default as axios } from "axios";
import { AuthenticationError } from "apollo-server-express";
import { Environment } from "../../environment/environment";

export class UserConnector {
  private knex: Knex;

  constructor(knex: Knex) {
    this.knex = knex;
  }

  async login(email: string, password: string) {
    email = email.toLowerCase();
    return this.knex
      .select("*")
      .from("user")
      .where({ email, password })
      .first()
      .then((res) => {
        if (!res) {
          return this.knex
            .select("*")
            .from("user")
            .where({ email })
            .first()
            .then((res) => {
              if (!res) {
                throw new AuthenticationError("Login failed, wrong email");
              } else {
                throw new AuthenticationError("Login failed, wrong password");
              }
            });
        } else {
          return res;
        }
      });
  }

  async getAllUsers() {
    return this.knex.select("*").from("user");
  }

  async getUserById(id: number) {
    return this.knex.select("*").from("user").where({ id }).first();
  }

  async addUser(user: User) {
    let imgurConfig = Environment.getConfig().imgurConfig;

    user.email = user.email.toLowerCase();

    let promises = [];
    promises.push(
      axios.post(
        imgurConfig.url,
        {
          image: user.profilePicture,
        },
        {
          headers: {
            Authorization: `Client-ID ${imgurConfig.clientId}`,
          },
        }
      )
    );

    let imgurResult = await Promise.all(promises);
    user.profilePicture = JSON.stringify(
      imgurResult.map((res) => res.data.data.link)
    );

    return this.knex
      .insert(user)
      .into("user")
      .then(
        ([id]) => {
          return this.getUserById(id);
        },
        (err) => {
          throw new Error(err.sqlMessage);
        }
      );
  }

  async updateUser(userId: number, user: User) {
    if (user.email) {
      user.email = user.email.toLowerCase();
    }
    return this.knex("user")
      .where({ id: userId })
      .update(user)
      .then(
        () => {
          return this.getUserById(userId);
        },
        (err) => {
          throw new Error(err.sqlMessage);
        }
      );
  }

  async removeUser(userId: number) {
    return this.knex("user")
      .where("id", userId)
      .del()
      .then(
        (res) => {
          if (res === 0) {
            throw new Error(`The user with id: ${userId} not found`);
          } else {
            return true;
          }
        },
        (err) => {
          throw new Error(err.sqlMessage);
        }
      );
  }
}
