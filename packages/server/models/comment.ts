import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IComment } from "./types";


export const commentModel: ModelAttributes<Model, IComment> = {
    text: {
      type: DataType.STRING,
      allowNull: false
    },
    thread_id: {
        type: DataType.NUMBER
    },
  };
