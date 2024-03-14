import { NextFunction, Request, Response } from "express";
import { jwtCheck } from "./jwt";

const whiteList = ["/public/login"];
// 权限校验
export const auth = (req: Request, res: Response, next: NextFunction) => {
  const { path } = req;
  if (whiteList.includes(path.toLowerCase()) || path.startsWith("/public")) {
    next();
  } else {
    jwtCheck(req, res, next);
  }
};
