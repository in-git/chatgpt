import { Response } from "express";

type ResponstType = {
  code?: 505 | 500 | 200;
  data?: any;
  msg?: string;
};
export const successHandler = (res: Response, config?: ResponstType) => {
  if (!config) {
    config = {
      data: null,
      msg: "成功响应",
    };
  }
  res.status(200).json({
    code: 200,
    data: config.data,
    msg: config.msg,
  });
};

export const errorHandler = (res: Response, config?: ResponstType) => {
  if (!config) {
    config = {
      code: 500,
      data: null,
      msg: "服务器错误",
    };
  }
  res.status(200).json({
    code: config.code,
    data: config.data,
    msg: config.msg,
  });
};
