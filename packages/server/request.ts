//  создать топик
//  создать сообщение
//  создать тред и внутри комментарий с текстом
//  связать ответ с комментарием
//  запросить все топики со всеми данными
// удалить сообщение/топик
// запросить реакции
// привязать реакцию топик\коммент

import { dbConnect } from './sequelize';
import { User,
    Topic,
    TopicUsers,
    Threads,
    Message,
    Comment,
    Reply,
    Reaction } from './sequelize';
import { ITopic } from './models/types';

// Создание Topic
export async function createTopic(id: number, title: string) {
    return Topic.create({ id, title });
}

// Обновление топика по ID
export async function updateTopicById(id: number, data: ITopic) {
    return Topic.update(data, { where: { id } });
}

// Удаление топика по ID
export async function deleteTopicById(id: number) {
    return Topic.destroy({ where: { id } });
}

// Получение топика по ID
export async function getTopicById(id: number) {
    return User.findOne({ where: { id } });
}

// Получение пользователей топика по ID
export async function getTopicUsersByFirstName(firstName: string) {
    return TopicUsers.findAll({ where: { firstName } });
}

export function startApp() {
    dbConnect().then(async () => {
        /*
         *  Запуск приложения только после старта БД
         */

        // Создаем новой топик
        await createTopic(1, 'Support');
        // Получаем пользователей с именем Vasya
        const newTopic = await getTopicById(1);

        // Проверяем, найдены ли пользователи
        if (!newTopic) {
            throw 'Not found'
        }

        // Получаем id первого пользователя
        // Обновляем пользователя по ID
        // await updateUserById(id, { firstName: 'Ivan', lastName: 'Ivanov' });

        // Ищем обновленного пользователя по id
        // const findedUser = await getUserById(id);
        // Выводим в консоль найденного пользователя
        console.log('Finded topic: ', newTopic);
    });
}
