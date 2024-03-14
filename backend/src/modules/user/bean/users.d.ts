import { Model, BuildOptions } from 'sequelize';
export interface IUsersAttributes {
  id?: number,
  create_at?: Date,
  username?: string,
  password?: string,
  ip?: string,
  salt?: string
}
export interface IUsersModel extends IUsersAttributes, Model { }

