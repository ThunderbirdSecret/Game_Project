import { ModelAttributes } from "sequelize";
import { DataType, Model } from "sequelize-typescript";
import { IUser } from "./types";

export const userModel: ModelAttributes<Model, IUser> = {
    name: {
      type: DataType.STRING,
      allowNull: false
    }
  };
