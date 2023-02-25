import type { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import User from "@/models/user";

type Data = {
  name: string;
};

const DATABASE = "test";
const COLLECTION = "users";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    await addUser(req);
  }
  res.status(200);
}

async function addUser(req: NextApiRequest): Promise<void> {
  const user: User = req.body;
  console.log(user);
  (await getMongoClient()).db(DATABASE).collection(COLLECTION).insertOne(user);
}
