import type { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import User from "@/models/user";

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
  const user: User = req.body;
  console.log(user);
  const client = await getMongoClient();
  await client.db(DATABASE).collection(COLLECTION).insertOne(user);
}
