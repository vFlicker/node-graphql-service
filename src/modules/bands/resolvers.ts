import { Pagination, Resolvers } from '../../common';
import { ArtistsService } from '../artists';
import { Member } from './types';

const getMembersByIds = async (
  members: Member[],
  artistsService: ArtistsService,
) => {
  const memberList = [];
  for (const { artistId: id, instrument, years } of members) {
    const artist = await artistsService.getItemById(id);
    const { firstName, secondName, middleName } = artist;
    memberList.push({
      id,
      firstName,
      secondName,
      middleName,
      instrument,
      years,
    });
  }
  return memberList;
};

export const resolvers: Resolvers = {
  Query: {
    bands: (_, { offset, limit }: Pagination, { dataSources }) => {
      return dataSources.bandsService.getAllItems(offset, limit);
    },
    band: (_, { id }, { dataSources }) => {
      return dataSources.bandsService.getItemById(id);
    },
  },
  Mutation: {
    createBand: (_, { input }, { dataSources }) => {
      return dataSources.bandsService.createItem(input);
    },
    updateBand: (_, { id, input }, { dataSources }) => {
      return dataSources.bandsService.updateItem(id, input);
    },
    deleteBand: (_, { id }, { dataSources }) => {
      return dataSources.bandsService.deleteItem(id);
    },
  },
  Band: {
    id: ({ _id }) => _id,
    genres: ({ genresIds }, _, { dataSources }) => {
      return dataSources.genresService.getItemsByIds(genresIds);
    },
    members: ({ members }, _, { dataSources }) => {
      return getMembersByIds(members, dataSources.artistsService);
    },
  },
};
