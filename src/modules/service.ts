import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { Context } from '../types'

export class Service<T> extends RESTDataSource<Context> {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
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
