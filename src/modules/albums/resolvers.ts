import { Pagination, Resolvers } from '../../common';

export const resolvers: Resolvers = {
  Query: {
    albums: (_, { offset, limit }: Pagination, { dataSources }) => {
      return dataSources.albumsService.getAllItems(offset, limit);
    },
    album: (_, { id }, { dataSources }) => {
      return dataSources.albumsService.getItemById(id);
    },
  },
  Mutation: {
    createAlbum: (_, { input }, { dataSources }) => {
      return dataSources.albumsService.createItem(input);
    },
    updateAlbum: (_, { id, input }, { dataSources }) => {
      return dataSources.albumsService.updateItem(id, input);
    },
    deleteAlbum: (_, { id }, { dataSources }) => {
      return dataSources.albumsService.deleteItem(id);
    },
  },
  Album: {
    id: ({ _id }) => _id,
    artists: ({ artistsIds }, _, { dataSources }) => {
      return dataSources.artistsService.getItemsByIds(artistsIds);
    },
    bands: ({ bandsIds }, _, { dataSources }) => {
      return dataSources.bandsService.getItemsByIds(bandsIds);
    },
    genres: ({ genresIds }, _, { dataSources }) => {
      return dataSources.genresService.getItemsByIds(genresIds);
    },
    tracks: ({ trackIds }, _, { dataSources }) => {
      return dataSources.tracksService.getItemsByIds(trackIds);
    },
  },
};
