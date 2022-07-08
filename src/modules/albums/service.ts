import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { Album } from './interfaces'

export class AlbumsService extends Service<Album> {
    constructor() {
        super(dotEnvConfig.ALBUMS_API)
    }
}
