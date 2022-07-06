import { GenreAPI } from '../modules/genres/service'

export type Context = {
    dataSources: {
        genreAPI: GenreAPI
    }
}
