import { sequelize } from "@/config/mysql";
import { DataTypes } from "sequelize";

const Bean = sequelize.define(
  "CorePageSetting",
  {
    settings: DataTypes.STRING,
  },
  {
    /* 生成下划线 */
    underscored: true,
  }
);

export default {
  Bean,
};
