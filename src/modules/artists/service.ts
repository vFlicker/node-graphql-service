import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { Artist } from './interfaces'

export class ArtistsService extends Service<Artist> {
    constructor() {
        super(dotEnvConfig.ARTISTS_API)
    }
}
