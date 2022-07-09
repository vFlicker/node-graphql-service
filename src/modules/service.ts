import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { Context, Id, DeleteResponse } from '../types'

export class Service<ItemResponse> extends RESTDataSource<Context> {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getItemById = (id: string): Promise<ItemResponse> => this.get(`/${id}`)

    getAllItems = async (): Promise<ItemResponse[]> => {
        const { items } = await this.get('/')
        return items
    }

    getItemsByIds = (ids: string[]): Promise<ItemResponse>[] => {
        const item = []
        for (const id of ids) item.push(this.getItemById(id))
        return item
    }

    createItem = <T extends object>(data: T): Promise<ItemResponse> => {
        return this.post('/', data)
    }

    updateItem = <T extends object>(id: Id, data: T): Promise<ItemResponse> => {
        return this.put(`/${id}`, data)
    }

    deleteItem = (id: Id): Promise<DeleteResponse> => this.delete(`/${id}`)
}
