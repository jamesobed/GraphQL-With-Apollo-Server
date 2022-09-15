import { Sequelize } from "sequelize";

const db = new Sequelize("app", "", "", {
  storage: "./todoTest.sqlite",
  dialect: "sqlite",
  logging: false,
});

export default db;
