import { dataSources } from '../utils'

type DataSources = ReturnType<typeof dataSources>

export type Context = {
    dataSources: DataSources
}
