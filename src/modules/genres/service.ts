import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { GenreResponse } from './types'

export class GenresService extends Service<GenreResponse> {
    constructor() {
        super(dotEnvConfig.GENRES_API)
    }
}
