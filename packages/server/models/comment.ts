import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface IComment {
  id?: string;
  id_topic: string;
  id_owner: string;
  text: string;
}

export const commentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_topic: {
    type: DataType.STRING,
    allowNull: false,
  },
  text: {
    type: DataType.STRING,
  },
  id_owner: {
    type: DataType.STRING,
  },
};
