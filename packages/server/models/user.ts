import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IUser {
  theme: string;
  avatar: string | null;
  display_name: string | null;
  email: string;
  first_name: string;
  id: number;
  login: string;
  phone: string;
  second_name: string;
}

export const topicUser: ModelAttributes<Model, IUser> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
  },
  login: {
    type: DataType.STRING,
    allowNull: false,
  },
  theme: {
    type: DataType.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataType.STRING,
    allowNull: true,
  },
  display_name: {
    type: DataType.STRING,
    allowNull: true,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataType.STRING,
    allowNull: false,
  },
  phone: {
    type: DataType.STRING,
    allowNull: false,
  },
  second_name: {
    type: DataType.STRING,
    allowNull: false,
  },
};
