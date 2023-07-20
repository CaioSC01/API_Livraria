import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://caio180g:1234@aluranode.vabprrj.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
