import { Resolvers } from '../../types'
import { ArtistsService } from '../artists'
import { Member } from './interfaces'

const getMembersByIds = async (
    members: Member[],
    artistsService: ArtistsService,
) => {
    const memberList = []
    for (const { artistId: id, instrument, years } of members) {
        const artist = await artistsService.getItemById(id)
        const { firstName, secondName, middleName } = artist
        memberList.push({
            id,
            firstName,
            secondName,
            middleName,
            instrument,
            years,
        })
    }
    return memberList
}

export const resolvers: Resolvers = {
    Query: {
        bands: (_, __, { dataSources }) => {
            return dataSources.bandsService.getAllItems()
        },
        band: (_, { id }, { dataSources }) => {
            return dataSources.bandsService.getItemById(id)
        },
    },
    Band: {
        id: ({ _id }) => _id,
        genres: ({ genresIds }, _, { dataSources }) => {
            return dataSources.genresService.getItemsByIds(genresIds)
        },
        members: ({ members }, _, { dataSources }) => {
            return getMembersByIds(members, dataSources.artistsService)
        },
    },
}
