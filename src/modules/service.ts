import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { Context, Id } from '../types'

export class Service<Response> extends RESTDataSource<Context> {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getItemById = (id: string): Promise<Response> => this.get(`/${id}`)

    getAllItems = async (): Promise<Response[]> => {
        const { items } = await this.get('/')
        return items
    }

    getItemsByIds = (ids: string[]): Promise<Response>[] => {
        const item = []
        for (const id of ids) item.push(this.getItemById(id))
        return item
    }

    createItem = <T extends object>(data: T): Promise<Response> => {
        return this.post('/', data)
    }

    updateItem = <T extends object>(id: Id, data: T): Promise<Response> => {
        return this.put(`/${id}`, data)
    }
}
