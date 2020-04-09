export interface User {
  id: string;
  firstName: string;
  lastName: string;
  gender: string; // Maybe enum
  birthDate: Date;
  email: string;
  phoneNumber: string;
  country: string; // Maybe enum
  city: string; // Maybe enum
  street: string; // Maybe enum
  zipCode: number;
  isAdmin: boolean;
}
