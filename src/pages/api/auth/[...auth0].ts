import getMongoClient from "@/clients/mongodb";
import { IUser, User, userSchema } from "@/models/user";
import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

// TODO: refactor registerUser to separate file
const DATABASE = "test";
const COLLECTION = "users";

async function registerUser(session: Session): Promise<void> {
  try {
    const user: IUser = await userSchema.validate(
        { name: session.user.name, email: session.user.email });
    const userModel: User = new User(user.name, user.email, user._id);
    const client = await getMongoClient();
    await client.db(DATABASE).collection(COLLECTION).updateOne(
        { name: userModel.name, email: userModel.email, isActive: true }, 
        { $set: userModel },
        { upsert: true });
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const afterCallback = async (
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session,
    state
    ) => {
    try {
        registerUser(session);
    } catch(error) {
        console.error(error);
        throw error;
    }
    res.redirect("/buckets");
    return session;
};

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end();
        }
    }
});

