import { dataSources } from '../config'

type DataSources = ReturnType<typeof dataSources>

export type Context = {
    dataSources: DataSources
}
