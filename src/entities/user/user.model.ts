import { Gender } from "../../enums/gender/gender.enum";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  birthDate: number;
  email: string;
  phoneNumber: string;
  country: string;
  city: string;
  street: string;
  zipCode: number;
  isAdmin: boolean;
  password: string;
  profilePicture?: string;
}
