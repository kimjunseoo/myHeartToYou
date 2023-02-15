import exrpess from "express";
import { getHome } from "../Controllers/globalController";

export const globalRouter = exrpess.Router();

globalRouter.get("/", getHome);