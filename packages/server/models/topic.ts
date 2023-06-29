import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

export interface ITopic {
  id?: string;
  title: string;
  description: string;
  id_author: string;
  date: string;
  views: number;
}

export const topicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
  id_author: {
    type: DataType.STRING,
    allowNull: false,
  },
  date: {
    type: DataType.STRING,
    allowNull: false,
  },
  views: {
    type: DataType.INTEGER,
  },
};
