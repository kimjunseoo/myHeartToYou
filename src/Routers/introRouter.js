import exrpess from "express";
import { getGoal, getIntroduce, getMotive } from "../Controllers/introControllers.js"


const introRouter = exrpess.Router();

introRouter.get("/introduce", getIntroduce);
introRouter.get("/motive", getMotive);
introRouter.get("/goal", getGoal);

export default introRouter;