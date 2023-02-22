import exrpess from "express";
import { getHome, getJoin, getLogin, postJoin } from "../Controllers/globalController";

const globalRouter = exrpess.Router();

globalRouter.get("/", getHome);
globalRouter.get("/login", getLogin);
globalRouter.route("/join").get(getJoin).post(postJoin);

export default globalRouter;