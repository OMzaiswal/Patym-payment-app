import db from "@repo/db/client";
import { CredentialsProvider } from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider ({
            name: 'Credentials',
            Credentials: {
                phone: { label: "Phone number", type: "text", placeholder: "1231231231"},
                password: { label: "Password", type: "password"}
            },
            // yaha se suru karo coding
        })
    ]
}