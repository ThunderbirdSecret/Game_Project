import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IReaction {
  id?: string;
  id_comment: string;
  id_owner: string;
  value: string;
}

export const reactionModel: ModelAttributes<Model, IReaction> = {
  id_comment: {
    type: DataType.STRING,
    allowNull: false,
  },
  id_owner: {
    type: DataType.STRING,
  },
  value: {
    type: DataType.STRING,
  },
};
