import exrpess from "express";
import { getHome, getJoin, getLogin } from "../Controllers/globalController";

const globalRouter = exrpess.Router();

globalRouter.get("/", getHome);
globalRouter.get("/login", getLogin);
globalRouter.get("/join", getJoin);

export default globalRouter;