import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { Track } from './interfaces'

export class TracksService extends Service<Track> {
    constructor() {
        super(dotEnvConfig.TRACKS_API)
    }
}
