import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IMessages } from "./types";



export const messagesModel: ModelAttributes<Model, IMessages> = {
    text: {
      type: DataType.STRING,
      allowNull: false
    },
    topic_id: {
        type: DataType.NUMBER
    },
  };
