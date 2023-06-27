import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IReply } from "./types";

export const replyModel: ModelAttributes<Model, IReply> = {
    id_comment: {
        type: DataType.NUMBER
    },
  };
