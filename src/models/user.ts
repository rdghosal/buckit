import BaseRecord from "./basemodel";
import * as yup from "yup";
import { ObjectId } from "mongodb";

export interface IUser {
  _id?: string | ObjectId;
  name: string;
  email: string;
}

export class User extends BaseRecord {
  name: string;
  email: string;
  constructor(
    name: string,
    email: string,
    ...args: ConstructorParameters<typeof BaseRecord>
  ) {
    super(...args);
    this.name = name;
    this.email = email;
  }
}

export const userSchema: yup.ObjectSchema<IUser> = yup.object({
  _id: yup.string().optional(),
  name: yup.string().required(),
  email: yup.string().email("must be email").required(),
});
