import { DataTypes, Model } from "sequelize";
import db from "../config/databaseConfig";
interface todoAttributes {
  id: string;
  task: string;
  age: string;
  completed: boolean;
}
export class todoInstance extends Model<todoAttributes> {}

todoInstance.init(
  {
    id: { type: DataTypes.UUIDV4, primaryKey: true },
    task: { type: DataTypes.STRING, primaryKey: false, allowNull: false },
    age: { type: DataTypes.STRING, primaryKey: false, allowNull: false },
    completed: { type: DataTypes.STRING, primaryKey: false, allowNull: false },
  },
  {
    sequelize: db,
    tableName: "todos",
  }
);
