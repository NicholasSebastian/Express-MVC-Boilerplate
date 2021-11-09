import express from "express";
import HomeController from "../controllers/HomeController";

const router = express.Router();

router.get("/", (req, res) => res.render("index"));
// add more method handlers here. return views, json, etc.

module.exports = router;
