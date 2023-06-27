import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IThreads } from "./types";

export const threadsModel: ModelAttributes<Model, IThreads> = {
    name: {
      type: DataType.STRING,
      allowNull: false
    },
    message_id: {
        type: DataType.NUMBER
    },
  };
