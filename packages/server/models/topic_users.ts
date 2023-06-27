import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { ITopicUsers } from "./types";

export const topicUsersModel: ModelAttributes<Model, ITopicUsers>= {
    topic_id: {
        type: DataType.NUMBER
    },
    user_id: {
      type: DataType.STRING,
      allowNull: false
    }
  };
