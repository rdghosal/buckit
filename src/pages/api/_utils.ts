import { Session } from "@auth0/nextjs-auth0";
import getMongoClient from "@/clients/mongodb";

const DATABASE = 'test';

export async function getUserId(session: Session) {
    const client = await getMongoClient();
    const user = await client.db(DATABASE).collection('users').findOne(
        { 
            name: session.user.name,
            email: session.user.email 
        }
    );
    if (!user) {
        throw Error(
            `Failed to find user with name=${session.user.name}, email=${session.user.email}`
        );
    }
    return user._id;
}

