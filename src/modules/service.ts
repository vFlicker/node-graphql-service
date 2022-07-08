import { RESTDataSource } from 'apollo-datasource-rest'

export class Service<T> extends RESTDataSource {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    getAllItems = async (): Promise<T[]> => {
        const { items } = await this.get('/')
        return items
    }

    getItemById = (id: string): Promise<T> => this.get(`/${id}`)

    getItemsByIds = (ids: string[]): Promise<T>[] => {
        const item = []
        for (const id of ids) item.push(this.getItemById(id))
        return item
    }
}
