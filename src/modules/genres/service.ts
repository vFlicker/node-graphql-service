import 'dotenv/config'

import { RESTDataSource } from 'apollo-datasource-rest'

export class GenreAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.GENRES_API
    }

    getAllGenres = async () => {
        const { items } = await this.get('/')
        return items
    }

    getGenreById = (id: string) => this.get(`/${id}`)
}
