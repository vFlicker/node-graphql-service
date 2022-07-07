import { RESTDataSource } from 'apollo-datasource-rest'

import { Artist } from './interfaces'

export class ArtistsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.ARTISTS_API
    }

    getAllArtists = async (): Promise<Artist[]> => {
        const { items } = await this.get('/')
        return items
    }

    getArtistById = (id: string): Promise<Artist> => this.get(`/${id}`)
}
