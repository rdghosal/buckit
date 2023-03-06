import { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import { WithId, Document, ObjectId } from "mongodb";
import { IUser, User, userSchema } from "@/models/user";

const DATABASE = "test";
const COLLECTION = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUser | null>
) {
  const { userId } = req.query;
  if (Array.isArray(userId) || !userId) {
    throw TypeError();
  }
  if (req.method === "GET") {
    await readUser(userId)
      .then((data) =>
        res
          .status(200)
          .send(userSchema.noUnknown().cast({ ...data, _id: userId }))
      )
      .catch((error) => res.status(500).end());
  }
}

async function readUser(userId: string): Promise<WithId<Document> | null> {
  console.log(userId);
  const client = await getMongoClient();
  let user: WithId<Document> | null = null;
  try {
    user = await client
      .db(DATABASE)
      .collection(COLLECTION)
      .findOne({ _id: new ObjectId(userId) });
    console.log(user);
  } catch (error) {
    console.log(error);
  }
  return user !== null ? user : null;
}
