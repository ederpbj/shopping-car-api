const jwt = require('jsonwebtoken')

const db = [{username: 'admin', password: 'admin'}]

const authenticate =({username, password}) => {
    const user = db.find(user.password === password && user.username === username)

    if(user){
        const token =  jwt.sign({username}, 'configuracaodaaplicacao')

        return {
            token,
            user
        }
    }
}

module.exports = {
    authenticate
}