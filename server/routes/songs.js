import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("songs api home");
});

router.get("/add", (req, res) => {
  res.send("songs api add");
});

router.get("/save", (req, res) => {
  res.send("songs api save");
});

export default router;
