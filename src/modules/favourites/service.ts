import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Context } from '../../types'
import { FavouritesResponse } from './types'

export class FavouritesService extends RESTDataSource<Context> {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.FAVOURITES_API
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getFavourites = (): Promise<FavouritesResponse> => this.get('/')
}
