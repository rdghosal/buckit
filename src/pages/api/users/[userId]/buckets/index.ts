import type { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import { IUser, User, userSchema } from "@/models/user";
import { ObjectId } from "mongodb";
import { Bucket, bucketSchema, IBucket } from "@/models/buckit";

const DATABASE = "test";
const COLLECTION = "buckets";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  if (req.method === "POST") {
    await addBucket(req)
      .then(() => res.status(200).end())
      .catch((error) => res.status(500).end());
  }
}

async function addBucket(req: NextApiRequest): Promise<void> {
  try {
    const bucket: IBucket = await bucketSchema.validate(req.body);
    const bucketModel: Bucket = new Bucket(
      [bucket.createdBy],
      bucket.title,
      bucket.createdBy
    );
    console.log(bucketModel);
    const client = await getMongoClient();
    await client.db(DATABASE).collection(COLLECTION).insertOne(bucketModel);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
