import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'

import { Context } from '../types'

export class Service<Response> extends RESTDataSource<Context> {
    constructor(baseURL: string) {
        super()
        this.baseURL = baseURL
    }

    willSendRequest(request: RequestOptions) {
        request.headers.set('Authorization', `Bearer ${this.context.token}`)
    }

    getAllItems = async (): Promise<Response[]> => {
        const { items } = await this.get('/')
        return items
    }

    getItemById = (id: string): Promise<Response> => this.get(`/${id}`)

    getItemsByIds = (ids: string[]): Promise<Response>[] => {
        const item = []
        for (const id of ids) item.push(this.getItemById(id))
        return item
    }
}
