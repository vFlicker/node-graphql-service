import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { Genre } from './interfaces'

export class GenresService extends Service<Genre> {
    constructor() {
        super(dotEnvConfig.GENRES_API)
    }
}
