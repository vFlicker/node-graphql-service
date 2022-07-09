import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { AlbumResponse } from './types'

export class AlbumsService extends Service<AlbumResponse> {
    constructor() {
        super(dotEnvConfig.ALBUMS_API)
    }
}
