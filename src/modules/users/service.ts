import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Context } from '../../types'
import { UserResponse } from './types'

type JWT = {
    jwt: string
}

type UserData = {
    email: string
    password: string
}

export class UsersService extends RESTDataSource<Context> {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.USERS_API
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    jwt = async (userData: UserData): Promise<string> => {
        const response = (await this.post('/login', userData)) as JWT
        return response.jwt
    }

    getUserById = (id: string): Promise<UserResponse> => this.get(`/${id}`)
}
