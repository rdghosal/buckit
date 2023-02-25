import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI;
if (!connectionString) {
    throw Error('Failed to load connection string');
}
const CLIENT: Promise<MongoClient> = new MongoClient(connectionString).connect();

export default async function getMongoClient(): Promise<MongoClient> {
    return await CLIENT;
};
