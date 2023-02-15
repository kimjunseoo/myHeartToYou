import express from "express";
import { globalRouter } from "./Routers/globalRouter";

const app = express();

console.log(process.cwd() + "/Views/")

app.set("view engine", "pug");
app.set("views", __dirname + "/Views");
app.use("/", globalRouter);

app.listen(3004, () => {
    console.log("***Server On***")
})