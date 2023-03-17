// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import User from "@/models/user";
import mongoose from "@/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      //  mongoose.connect().then(() => {
      //   console.log("Connected to mongo instance");
      // }).catch((err) => {
      //   console.error("Error connecting to mongo: Reason: ", err.message);
      // });

      console.log("register");
      const { name, email, password } = req.body;
      const user = await User.create({
        name,
        email,
        password,
      });

      res.status(200).json({ user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    }
  }
}
