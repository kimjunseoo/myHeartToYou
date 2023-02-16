import exrpess from "express";
import { getHome } from "../Controllers/globalController";

const globalRouter = exrpess.Router();

globalRouter.get("/", getHome);

export default globalRouter;