import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IReaction } from "./types";


export const reactionModel: ModelAttributes<Model, IReaction> = {
    reaction: {
      type: DataType.STRING,
      allowNull: false
    },
    message_id: {
        type: DataType.NUMBER
    },
  };
