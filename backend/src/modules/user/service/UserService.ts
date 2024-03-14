import * as crypto from "crypto";
import { UsersModel } from "../bean/users";
import { IUsersModel } from "../bean/users.d";

export class UserService {
  /* 注册 */

  static async register(user: Partial<IUsersModel>): Promise<boolean> {
    const result = await UsersModel.findOne({
      attributes: ["username"],
      where: {
        username: user.username,
      },
    });
    /* 不存在则创建 */
    if (!result) {
      /* 对密码进行加密 */
      // 生成随机的盐值
      const salt = crypto.randomBytes(16).toString("hex");

      // 使用盐值和明文密码生成哈希
      const hashedPassword = crypto
        .pbkdf2Sync(user.password || "", salt, 10000, 64, "sha512")
        .toString("hex");
      user.password = hashedPassword;
      user.salt = salt;
      await UsersModel.create({
        ...user,
      });
      return true;
    } else {
      return false;
    }
  }
  /* 登陆 */
  static async login(user: Partial<IUsersModel>): Promise<boolean> {
    let bool = false;
    const result = await UsersModel.findOne({
      attributes: ["username", "password", "salt"],
      where: {
        username: user.username,
      },
    });
    /* 如果存在,校验密码是否正确 */
    if (result) {
      console.log(result.dataValues);

      const { password, salt } = result.dataValues;
      const hashedPassword = crypto
        .pbkdf2Sync(user.password || "", salt || "", 10000, 64, "sha512")
        .toString("hex");
      if (password === hashedPassword) {
        bool = true;
      }
    }
    return bool;
  }
}
