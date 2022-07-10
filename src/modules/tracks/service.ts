import { dotEnvConfig } from '../../config'
import { Service } from '../../common'
import { TrackResponse } from './types'

export class TracksService extends Service<TrackResponse> {
    constructor() {
        super(dotEnvConfig.TRACKS_API)
    }
}
