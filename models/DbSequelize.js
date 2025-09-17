// import dotenv from 'dotenv';
// dotenv.config(); // ⚠️ Esto no funciona en Vercel para .env locales

import pg from 'pg';
import { Sequelize, DataTypes } from "sequelize";
import { User } from './user.js';
import { News } from './news.js';
import { Team } from './team.js';
import { Client } from "./client.js";
import { Negotiation } from "./negotiation.js";

const DB_NAME = process.env.DB_NAME ?? "postgres";
const DB_USER = process.env.DB_USER ?? "postgres";
const DB_PASS = process.env.DB_PASS ?? "testing";
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_PORT = process.env.DB_PORT ?? 5432;
const DB_ENGINE = process.env.DB_ENGINE ?? "postgres";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_ENGINE,
  dialectModule: pg,
  // port: DB_PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const UserModel = User(sequelize, DataTypes);
const NewsModel = News(sequelize, DataTypes);
const TeamModel = Team(sequelize, DataTypes);
const ClientModel = Client(sequelize, DataTypes);
const NegotiationModel = Negotiation(sequelize, DataTypes);

export {
  sequelize,
  UserModel,
  NewsModel,
  TeamModel,
  ClientModel,
  NegotiationModel
}
