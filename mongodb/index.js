import mongoose from "mongoose";
// const dbConnect = () => {
//   // Database connection
//   if (mongoose.connections[0].readyState) {
//     console.log("Already connected");
//     return;
//   }
//   mongoose.connect("");
// };

mongoose.connect("mongodb+srv://rose1:rose@raocluster.oautq.mongodb.net/next-auth?retryWrites=true&w=majority",{
  connectTimeoutMS: 30000,
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 30000,
})

mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo: Reason: ", err.message);
});
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from mongo instance");
});

export default mongoose;
