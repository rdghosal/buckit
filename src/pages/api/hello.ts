// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

type Data = {
  name: string
}

async function getClient(): Promise<MongoClient> {
  const client: MongoClient = await new MongoClient(process.env.MONGO_URI as string).connect();
  await client.db('test').collection('test').insertOne({message: 'inserted from test'});
  return client;
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
