import express from "express";
import mongoose from "mongoose";
import router from "./router/router.js";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

async function startProject() {
  const db_URL = process.env.db_URL;
  const PORT = process.env.PORT;
  try {
    await mongoose.connect(db_URL);
    app.listen(PORT, () => {
      console.log(`server work on http://localhost:${PORT}`);
    });
  } catch (e) {
    throw new Error(e);
  }
}
startProject();
