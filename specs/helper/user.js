import supertest from "supertest";
import config from "../../config";

const url = config.url;

//контроллер user
const user = {

    login: (payload) => {
        return supertest(url)
            .post('/api/v1/login')
            .set('Accept', 'application/json')
            .send(payload)
    },

}


export default user