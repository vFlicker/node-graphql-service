import { RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { User } from './interfaces'

type JWT = {
    jwt: string
}

type UserData = {
    email: string
    password: string
}

export class UsersService extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.USERS_API
    }

    jwt = async (userData: UserData): Promise<string> => {
        const response: JWT = await this.post('/login', userData)
        return response.jwt
    }

    getUserById = (id: string): Promise<User> => this.get(`/${id}`)
}
