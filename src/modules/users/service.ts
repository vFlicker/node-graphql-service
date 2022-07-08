import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { User } from './interfaces'

type UserData = {
    email: string
    password: string
}

export class UsersService extends Service<User> {
    constructor() {
        super(dotEnvConfig.USERS_API)
    }

    jwt = (userData: UserData) => this.post('/login', userData)
}
