import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Context, Id } from '../../common'
import { Favourite, FavouritesResponse } from './types'

export class FavouritesService extends RESTDataSource<Context> {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.FAVOURITES_API
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getAllItems = (): Promise<FavouritesResponse> => this.get('/')

    addItem = (id: Id, type: Favourite): Promise<FavouritesResponse> =>
        this.put('/add', { id, type })
}
