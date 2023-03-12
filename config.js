require('dotenv').config();

const config = {
    url:'https://admin.k-ampus.dev',
    credentials_valid: {
        "username":process.env.valid_username,
        "password":process.env.valid_password
    },
    credentials_invalid_username: {
        "username":process.env.invalid_username,
        "password":process.env.valid_password
    },
    credentials_invalid_password: {
        "username":process.env.valid_username,
        "password":process.env.invalid_password
    },
    topicCreationData: {
        "tagNames":[],
        "skillNames":[],
        "qiwi":false,
        "qiwiLibrary":false,
        "errors":"",
        "dates":[],
        "scope":"EXTERNAL",
        "statusScope":false,
        "confirmVisible":"",
        "imageSrc":"",
        "eventName":"Конференция",
        "languageId":1,
        "typeLabelId":5,
        "typeId":1,
        "subTypeId":24,
        "comment":null,
        "formChange":true,
        "name":"Новый электронный курс",
        "modalCategory":false,
        "categoryIds":[1004],
        "levelId":"2",
        "description":"аа",
        "webinarCreateEventRequest":[],
        "authorNames":[]
    },
    invalidToken: "1234567890"
}

export default config