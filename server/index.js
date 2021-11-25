import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import songsRoutes from "./routes/songs.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/songs", songsRoutes);

app.get("/", (req, res) => {
  res.send("Home api");
});

const CONNECTION_URL =
  "mongodb+srv://hamza:masood@cluster0.3o3ny.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(err));
