import { RESTDataSource } from 'apollo-datasource-rest'

import { dotEnvConfig } from '../../config'
import { Favourites } from './interfaces'

export class FavouritesService extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = dotEnvConfig.FAVOURITES_API
    }

    getFavourites = async (): Promise<Favourites> => {
        const result = await this.get('/')
        return result
    }
}
