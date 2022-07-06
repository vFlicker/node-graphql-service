import { RESTDataSource } from 'apollo-datasource-rest'

export class BandAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = process.env.BANDS_API
    }

    getAllBands = async () => {
        const { items } = await this.get('/')
        return items
    }

    getBandById = (id: string) => this.get(`/${id}`)
}
