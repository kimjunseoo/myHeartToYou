import exrpess from "express";
import { getIntroduceSpon, getIrregularSpon, getSpon } from "../Controllers/sponControllers";

const sponRouter = exrpess.Router();

sponRouter.get("/", getSpon);
sponRouter.get("/irregularSpon", getIrregularSpon);
sponRouter.get("/introduce", getIntroduceSpon);

export default sponRouter;