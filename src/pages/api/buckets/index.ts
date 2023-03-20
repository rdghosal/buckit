import type { NextApiRequest, NextApiResponse } from "next";
import getMongoClient from "@/clients/mongodb";
import { IUser, User, userSchema } from "@/models/user";
import { ObjectId } from "mongodb";
import { Bucket, bucketSchema, IBucket } from "@/models/buckit";
import { getSession, withApiAuthRequired, Session } from "@auth0/nextjs-auth0";
import { getUserId } from "../_utils";

const DATABASE = "test";
const COLLECTION = "buckets";

export default withApiAuthRequired(async function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
    const session = await getSession(req, res);
    if (!session) {
        res.status(401).end();
    }
    if (req.method === "POST") {
    await addBucket(req, session!)
        .then(() => res.status(200).end())
        .catch((error) => res.status(500).end());
    }
});

async function addBucket(req: NextApiRequest, session: Session): Promise<void> {
    const userId: ObjectId = await getUserId(session);
    try {
        const bucket: IBucket = await bucketSchema.validate(JSON.parse(req.body));
        const bucketModel: Bucket = new Bucket(
          [userId],
          bucket.title,
          userId,
          bucket.description,
        );
        console.log(bucketModel);
        const client = await getMongoClient();
        await client.db(DATABASE).collection(COLLECTION).insertOne(bucketModel);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

