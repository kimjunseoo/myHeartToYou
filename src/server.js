import express from "express";
import globalRouter from "./Routers/globalRouter";
import introRouter from "./Routers/introRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/Views");

app.use("/clients", express.static(__dirname + "/clients"));
app.use("/", globalRouter);
app.use("/myHeartToYou", introRouter);


app.listen(3004, () => {
    console.log("***Server On***")
})