import { dotEnvConfig } from '../../config'
import { Service } from '../service'
import { Band } from './interfaces'

export class BandsService extends Service<Band> {
    constructor() {
        super(dotEnvConfig.BANDS_API)
    }
}
