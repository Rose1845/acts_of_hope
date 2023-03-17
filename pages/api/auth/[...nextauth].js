import User from "@/models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
// import mongoose from "mongoose";
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        // mongoose
        //   .connect()
        //   .then(() => {
        //     console.log("Connected to mongo instance");
        //   })
        //   .catch((err) => {
        //     console.error("Error connecting to mongo: Reason: ", err.message);
        //   });
        const { email, password } = credentials;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error("No user found");
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
          throw new Error("Password or Email is incorrect");
        }
        return user;
      },
    }),
  ],
 
  secret: process.env.NEXTAUTH_SECRET,
});
