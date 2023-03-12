require('dotenv').config();

const config = {
    url:'https://k-ampus.dev',
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
    }
}

export default config