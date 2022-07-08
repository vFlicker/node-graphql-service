import { Service } from '../service'
import { Artist } from './interfaces'

export class ArtistsService extends Service<Artist> {
    constructor() {
        super(process.env.ARTISTS_API as string)
    }
}
