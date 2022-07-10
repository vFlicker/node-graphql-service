import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Context, Id } from '../../types'
import { JWT, JWTInput, UserResponse } from './types'

export class UsersService extends RESTDataSource<Context> {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.USERS_API
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    jwt = async (data: JWTInput): Promise<string> => {
        const response = (await this.post('/login', data)) as JWT
        return response.jwt
    }

    getUserById = (id: Id): Promise<UserResponse> => this.get(`/${id}`)

    register = <T extends object>(data: T): Promise<UserResponse> => {
        return this.post('/register', data)
    }
}
