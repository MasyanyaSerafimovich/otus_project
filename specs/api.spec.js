import config from "../config";
import user from "../framework/services/user";

describe('В Kampus.com', () => {

    describe('Метод POST /api/v1/login', () => {

        test('Получает токен при введении правильных логина и пароля', async () => {

            // Отправляем запрос с корректными данными
            const res = await user.login(config.credentials_valid);

            // Проверяем, что пришел статус 200
            expect(res.status).toEqual(200);

            // Проверяем, что токен является строкой
            expect(typeof res.body.accessToken).toEqual('string');

        })

        test.each ([

            // Случай с некорректным логином
            [config.credentials_invalid_username],

            // Случай с некорректным паролем
            [config.credentials_invalid_password]
        ]) ('Возвращает ошибку авторизации, если неверный логин или пароль', async (payload) => {

            // Отправляем запрос с данными из массива выше
            const res = await user.login(payload);

            // Проверяем, что пришел статус 403
            expect(res.status).toEqual(403);

            // Проверяем, что пришел корректный текст ошибки
            expect(res.body.message).toEqual("Неверный логин или пароль");
        })

    })

    describe('Метод POST /api/v1/topic', () => {

        test('Создает материал', async () => {

            // Получаем токен пользователя-создателя
            const token = await user.getToken(config.credentials_valid);

            // Создаем материал
            const res = await user.createTopic(config.topicCreationData, token)

            // Проверяем, что пришел статус 200
            expect(res.status).toEqual(200);

            // Получаем id созданного материала
            const topic_id = await res.body.id;

            // Проверяем, что id является числом
            expect(typeof topic_id).toEqual('number');

            // Удаляем материал
            const res2 = await user.deleteTopic(topic_id, token);

            // Проверяем, что пришел статус 200
            expect(res2.status).toEqual(200);

        })

        test('Не создает материал, если токен неккоректный', async () => {

            // Создаем материал, используя некорректный токен
            const res = await user.createTopic(config.topicCreationData, config.invalidToken)

            // Проверяем, что пришел статус 401
            expect(res.status).toEqual(401);

            // Проверяем, что id материала не получен
            expect(typeof res.body.id).toEqual('undefined');

        })

    })
    
})