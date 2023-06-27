import { commentModel } from './models/comment';
import { messagesModel } from './models/messages';
import { reactionModel } from './models/reaction';
import { replyModel } from './models/reply';
import { threadsModel } from './models/threads';
import { topicModel } from './models/topic';
import { topicUsersModel } from './models/topic_users';
import { userModel } from './models/user';
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

// Инициализируем модели
export const User = sequelize.define('User', userModel, {});
export const Topic = sequelize.define('Topic', topicModel, {});
export const TopicUsers = sequelize.define('TopicUsers', topicUsersModel, {});
export const Threads = sequelize.define('Threads', threadsModel, {});
export const Message = sequelize.define('Message', messagesModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});
export const Reply = sequelize.define('Reply', replyModel, {});
export const Reaction = sequelize.define('Reaction', reactionModel, {});




export async function dbConnect() {
    try {
        await sequelize.authenticate(); // Проверка аутентификации в БД
        await sequelize.sync(); // Синхронизация базы данных
        console.log('БД подключенно.');
    } catch (error) {
        console.error('БД не подключен', error);
    }
}

