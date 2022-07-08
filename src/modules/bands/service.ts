import { Service } from '../service'
import { Band } from './interfaces'

export class BandsService extends Service<Band> {
    constructor() {
        super(process.env.BANDS_API as string)
    }
}
