import { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import { WithId, Document, ObjectId } from "mongodb";

const DATABASE = "test";
const COLLECTION = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WithId<Document> | null>
) {
  const { userId } = req.query;
  if (Array.isArray(userId) || !userId) {
    throw TypeError();
  }
  if (req.method === "GET") {
    await readUser(parseInt(userId))
      .then((data) => res.status(200).send(data))
      .catch((error) => res.status(500).end());
  }
}

async function readUser(userId: number): Promise<WithId<Document> | null> {
  console.log(userId);
  const client = await getMongoClient();
  const user = await client
    .db(DATABASE)
    .collection(COLLECTION)
    .findOne({ _id: userId });
  return user !== null ? user : null;
}
