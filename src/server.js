import "./db.js"
import express from "express";
import globalRouter from "./Routers/globalRouter";
import introRouter from "./Routers/introRouter";
import sponRouter from "./Routers/sponRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/Views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/clients", express.static(__dirname + "/clients"));
app.use("/", globalRouter);
app.use("/myHeartToYou", introRouter);
app.use("/spon", sponRouter);


app.listen(3004, () => {
    console.log("***Server On***")
})