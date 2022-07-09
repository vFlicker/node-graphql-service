import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { Context, Id, DeleteResponse } from '../types'

export class Service<Item> extends RESTDataSource<Context> {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getItemById = (id: string): Promise<Item> => this.get(`/${id}`)

    getAllItems = async (): Promise<Item[]> => {
        const { items } = await this.get('/')
        return items
    }

    getItemsByIds = (ids: string[]): Promise<Item>[] => {
        const item = []
        for (const id of ids) item.push(this.getItemById(id))
        return item
    }

    createItem = <T extends object>(data: T): Promise<Item> => {
        return this.post('/', data)
    }

    updateItem = <T extends object>(id: Id, data: T): Promise<Item> => {
        return this.put(`/${id}`, data)
    }

    deleteItem = (id: Id): Promise<DeleteResponse> => this.delete(`/${id}`)
}
