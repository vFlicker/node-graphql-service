import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Context } from '../../types'
import { Favourites } from './interfaces'

export class FavouritesService extends RESTDataSource<Context> {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.FAVOURITES_API
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getFavourites = async (): Promise<Favourites> => {
        const result = await this.get('/')
        return result
    }
}
