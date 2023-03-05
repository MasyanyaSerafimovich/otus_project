import config from "../../config";
import user from "../helper/user";

describe('В разделе Authorization and authentication', () => {
    describe('Метод POST /api/v1/login', () => {

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

})