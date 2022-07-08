import { Service } from '../service'
import { Genre } from './interfaces'

export class GenresService extends Service<Genre> {
    constructor() {
        super(process.env.GENRES_API as string)
    }
}
