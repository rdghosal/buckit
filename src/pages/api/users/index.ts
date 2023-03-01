import type { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import { IUser, User, userSchema } from "@/models/user";
import { ObjectId } from "mongodb";

const DATABASE = "test";
const COLLECTION = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  if (req.method === "POST") {
    await addUser(req)
      .then(() => res.status(200).end())
      .catch((error) => res.status(500).end());
  }
}

async function addUser(req: NextApiRequest): Promise<void> {
  try {
    const user: IUser = await userSchema.validate(req.body);
    const userModel: User = new User(user.name, user.email, user._id);
    console.log(user);
    const client = await getMongoClient();
    await client.db(DATABASE).collection(COLLECTION).insertOne(userModel);
  } catch (error) {
    console.log(error);
  }
}
