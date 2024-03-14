import { errorHandler } from "@/config/response";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const jwtKey = "in-github-cence"; // token生成的密匙，根据自己需求定义

export const jwtSign = (data: any) => {
  // token生成函数，有效时间为一个小时
  return jwt.sign(data, jwtKey, { expiresIn: 60 * 60 * 24 * 15 });
};

export const jwtCheck = (req: Request, res: Response, next: Function) => {
  // token验证函数
  const token = req.headers.authorization as string;

  jwt.verify(token, jwtKey, (err) => {
    if (err) {
      errorHandler(res, {
        msg: "token校验失败",
        code: 500,
      });
    } else {
      next();
    }
  });
};
