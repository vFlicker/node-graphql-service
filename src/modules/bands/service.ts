import { RESTDataSource } from 'apollo-datasource-rest'

import { Band } from './interfaces'

export class BandsAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.BANDS_API
    }

    getAllBands = async (): Promise<Band[]> => {
        const { items } = await this.get('/')
        return items
    }

    getBandById = (id: string): Promise<Band> => this.get(`/${id}`)
}
