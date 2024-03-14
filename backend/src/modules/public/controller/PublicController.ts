import { jwtSign } from "@/auth/jwt";
import { errorHandler, successHandler } from "@/config/response";
import { UserService } from "@/modules/user/service/UserService";
import { Router } from "express";
const router = Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const result = await UserService.login({
    username,
    password,
  });
  if (result) {
    /* 注册成功后，生成jwt */
    const token = jwtSign({
      username,
    });
    successHandler(res, {
      data: {
        token,
      },
      msg: "成功登陆",
    });
  } else {
    errorHandler(res, {
      msg: "用户名或密码错误",
      code: 500,
    });
  }
});
/* 注册 */
router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const result = await UserService.register({
    username,
    password,
  });
  if (result) {
    successHandler(res, {
      msg: "成功注册",
    });
  } else {
    errorHandler(res, {
      code: 505,
      msg: "注册失败,用户已存在",
    });
  }
});

export default router;
