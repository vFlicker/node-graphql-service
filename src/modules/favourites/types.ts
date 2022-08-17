export const enum Favourite {
  ARTISTS = 'artists',
  BANDS = 'bands',
  GENRES = 'genres',
  TRACKS = 'tracks',
}

export type FavouritesResponse = {
  _id: string;
  userId: string;
  bandsIds: string[];
  genresIds: string[];
  artistsIds: string[];
  tracksIds: string[];
};

export type AddToFavouritesInput = {
  id: string;
  type: Favourite;
};
