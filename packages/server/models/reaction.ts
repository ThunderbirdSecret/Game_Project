import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IReaction {
  id: number;
  id_comment: number;
  id_owner: string;
  value: string;
}

export const reactionModel: ModelAttributes<Model, IReaction> = {
  id: {
    type: DataType.INTEGER,
    defaultValue: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  id_comment: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  id_owner: {
    type: DataType.STRING,
  },
  value: {
    type: DataType.STRING,
  },
};
