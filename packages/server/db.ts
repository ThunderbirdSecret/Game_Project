import { reactionModel } from './models/reaction';
import { commentModel } from './models/comment';
import { topicModel } from './models/topic';
import { topicUser } from './models/user';
import { Client } from 'pg'
import { ModelCtor, Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { replyModel } from './models/reply';
import { BaseCrud as BaseCrud } from './models/types/BaseCrud';
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT } =
  process.env

  const sequelizeOptions: SequelizeOptions = {
    host: 'postgresql',
    port: parseInt(POSTGRES_PORT || ''),
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    dialect: 'postgres',
  };

  export const sequelize = new Sequelize(sequelizeOptions);


export const Topic = sequelize.define('Topic', topicModel, {});
export const Comment = sequelize.define('Comment', commentModel, {});
export const Reaction = sequelize.define('Reaction', reactionModel, {});
export const User = sequelize.define('User', topicUser, {});
export const Reply = sequelize.define('Reply', replyModel)

Comment.hasMany(Reaction, { foreignKey: 'id_comment' });
Reaction.belongsTo(Comment, { foreignKey: 'id' });
Reply.belongsTo(Comment, { foreignKey: 'id_comment' })

export const topicCrud = new BaseCrud(Topic as ModelCtor);
export const commentCrud = new BaseCrud(Comment as ModelCtor);
export const reactionCrud = new BaseCrud(Reaction as ModelCtor);
export const userCrud = new BaseCrud(User as ModelCtor);

export async function dbConnect() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
// export const createClientAndConnect = async (): Promise<Client | null> => {
//   try {
//     const client = new Client({
//       user: POSTGRES_USER,
//       host: 'localhost',
//       database: POSTGRES_DB,
//       password: POSTGRES_PASSWORD,
//       port: Number(POSTGRES_PORT),
//     })

//     await client.connect()

//     const res = await client.query('SELECT NOW()')
//     console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
//     client.end()

//     return client
//   } catch (e) {
//     console.error(e)
//   }

//   return null
// }
