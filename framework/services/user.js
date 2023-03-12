import supertest from "supertest";
import config from "../../config";

const url = config.url;

// Контроллер user
const user = {

    // Запрос на логин под пользователем
    login: (payload) => {
        return supertest(url)
            .post('/api/v1/login')
            .set('Accept', 'application/json')
            .send(payload)
    },

    // Запрос на логин под пользователем, возвращающий токен
    getToken: async (payload) => {
        let res = await supertest(url)
            .post('/api/v1/login')
            .set('Accept', 'application/json')
            .send(payload)
        return await res.body.accessToken
    },
    
    // Запрос на создание материала от имени пользователя
    createTopic: (payload, token) => {
        return supertest(url)
            .post('/api/v1/topic')
            .set('Authorization', token)
            .send(payload)
    },

    // Запрос на удаление материала по id от имени пользователя
    deleteTopic: (id, token) => {
        return supertest(url)
            .delete(`/api/v1/topic/${id}`)
            .set('Authorization', token)
    }

}


export default user