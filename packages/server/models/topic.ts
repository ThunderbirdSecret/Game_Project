import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { ITopic } from "./types";

export const topicModel: ModelAttributes<Model, ITopic>= {
    title: {
      type: DataType.STRING,
      allowNull: false
    }
  };
