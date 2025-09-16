import { Sequelize, DataTypes } from "sequelize";
import { User } from './user.js';
import { News } from './news.js';
import { Team } from './team.js';
import { Client } from "./client.js";
import { Negotiation } from "./negotiation.js";

const DB_NAME = process.env.DB_NAME ?? "db_testing";
const DB_USER = process.env.DB_USER ?? "testing";
const DB_PASS = process.env.DB_PASS ?? "testing";
const DB_HOST = process.env.DB_HOST ?? "localhost";
const DB_ENGINE = process.env.DB_ENGINE ?? "mysql";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
   host: DB_HOST,
   dialect: DB_ENGINE
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
