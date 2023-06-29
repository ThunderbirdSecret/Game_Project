import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";


export interface IReply {
    id_comment: number,
}

export const replyModel: ModelAttributes<Model, IReply> = {
    id_comment: {
        type: DataType.NUMBER
    },
  };
  