import { RESTDataSource } from 'apollo-datasource-rest'

import { Genre } from './interfaces'

export class GenresAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.GENRES_API
    }

    getAllGenres = async (): Promise<Genre[]> => {
        const { items } = await this.get('/')
        return items
    }

    getGenreById = (id: string): Promise<Genre> => this.get(`/${id}`)
}
