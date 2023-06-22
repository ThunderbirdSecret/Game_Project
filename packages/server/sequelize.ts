import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

const sequelizeOptions: SequelizeOptions = {
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  dialect: 'postgres' // 'mysql', 'sqlite', 'mariadb', 'mssql'
};

const sequelize = new Sequelize(sequelizeOptions);
/*
// Инициализируем модели
export const User = sequelize.define('User', userModel, {});

export async function dbConnect() {
    try {
        await sequelize.authenticate(); // Проверка аутентификации в БД
        await sequelize.sync(); // Синхронизация базы данных
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
*/
