import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IComment {
  id: number;
  id_topic: number;
  id_owner: number;
  text: string;
  date: Date;
  reactions: number;
}

export const commentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.INTEGER,
    defaultValue: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  id_topic: {
    type: DataType.NUMBER,
    allowNull: false,
  },
  text: {
    type: DataType.STRING,
  },
  id_owner: {
    type: DataType.NUMBER,
  },
  date: {
    type: DataType.DATE,
  },
  reactions: {
    type: DataType.INTEGER,
  },
};
