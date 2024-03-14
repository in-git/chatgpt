import { sequelize } from '@/config/mysql';
import { DataTypes } from 'sequelize';
import { IUsersAttributes } from "./users.d"

export class Users implements IUsersAttributes {
  id?: number
  create_at?: Date
  username?: string
  password?: string
  ip?: string
  salt?: string
}

export const UsersModel = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  nickname: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.ENUM('Male', 'Female', 'Other'),
  },
  birth: {
    type: DataTypes.DATE,
  },
  address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  isAdmin: {
    type: DataTypes.STRING,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
  avatar: {
    type: DataTypes.STRING,
  },
  salt: {
    type: DataTypes.STRING,
  },
  qq: {
    type: DataTypes.STRING,
  },
  wechat: {
    type: DataTypes.STRING,
  },
}, {
  tableName: "core_users",
  comment: "",
  "underscored": true,
});
