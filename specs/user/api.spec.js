import config from "../../config";
import user from "../helper/user";

describe('В разделе Authorization and authentication (Наш e2e тест)', () => {
    describe('В разделе Authorization and authentication метод POST /api/v1/login (тесты на вход авторизованным пользователем)', () => {

        test('получает токен при введении правильных логина и пароля', async () => {
            const res = await user.login(config.credentials_valid);
            expect(res.status).toEqual(200);
            expect(typeof res.body.accessToken).toEqual('string')
        })

        test('возвращает статус 403, если логин неверный', async () => {
            const res = await user.login(config.credentials_invalid_username);

            expect(res.status).toEqual(403);
            expect(res.body.message).toEqual("Неверный логин или пароль")
        })

        test('возвращает статус 403, если пароль неверный', async () => {
            const res = await user.login(config.credentials_invalid_password);

            expect(res.status).toEqual(403);
            expect(res.body.message).toEqual("Неверный логин или пароль")
        })

    })

    describe('Новый тест', () => {

        test('новый тест', async () => {
            const res = await user.login(config.credentials_invalid_password);

            expect(res.status).toEqual(403);
            expect(res.body.message).toEqual("Неверный логин или пароль")
        })

    })

})