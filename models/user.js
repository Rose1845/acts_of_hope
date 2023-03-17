import mongoose from "@/mongodb";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, salt);
});
export default mongoose.models.User || mongoose.model("User", UserSchema);
