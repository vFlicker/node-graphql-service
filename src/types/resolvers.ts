import { GraphQLResolveInfo } from 'graphql';
import { AlbumResponse } from '../modules/albums';
import { ArtistResponse } from '../modules/artists';
import { BandResponse } from '../modules/bands';
import { FavouritesResponse } from '../modules/favourites';
import { GenreResponse } from '../modules/genres';
import { TrackResponse } from '../modules/tracks';
import { UserResponse } from '../modules/users';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  artists?: Maybe<Array<Maybe<Artist>>>;
  bands?: Maybe<Array<Maybe<Band>>>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  released?: Maybe<Scalars['Int']>;
  tracks?: Maybe<Array<Maybe<Track>>>;
};

export type Artist = {
  __typename?: 'Artist';
  bands?: Maybe<Array<Maybe<Band>>>;
  birthDate?: Maybe<Scalars['String']>;
  birthPlace?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  instruments?: Maybe<Array<Maybe<Scalars['String']>>>;
  middleName?: Maybe<Scalars['String']>;
  secondName: Scalars['String'];
};

export type Band = {
  __typename?: 'Band';
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  members?: Maybe<Array<Maybe<Member>>>;
  name: Scalars['String'];
  origin?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type CreateAlbumInput = {
  artistsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  released?: InputMaybe<Scalars['Int']>;
  trackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type CreateArtistInput = {
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  birthDate?: InputMaybe<Scalars['String']>;
  birthPlace?: InputMaybe<Scalars['String']>;
  country: Scalars['String'];
  firstName: Scalars['String'];
  instruments?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  middleName?: InputMaybe<Scalars['String']>;
  secondName: Scalars['String'];
};

export type CreateBandInput = {
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  members?: InputMaybe<Array<InputMaybe<CreateMemberInput>>>;
  name: Scalars['String'];
  origin?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type CreateGenreInput = {
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  year?: InputMaybe<Scalars['Int']>;
};

export type CreateMemberInput = {
  artistId: Scalars['ID'];
  instrument?: InputMaybe<Scalars['String']>;
  years?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CreateTrackInput = {
  albumId?: InputMaybe<Scalars['String']>;
  artistsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  duration?: InputMaybe<Scalars['Int']>;
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  released?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  acknowledged?: Maybe<Scalars['Boolean']>;
  deletedCount?: Maybe<Scalars['Int']>;
};

export type Favourites = {
  __typename?: 'Favourites';
  artists?: Maybe<Array<Maybe<Artist>>>;
  bands?: Maybe<Array<Maybe<Band>>>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  tracks?: Maybe<Array<Maybe<Track>>>;
  userId?: Maybe<Scalars['ID']>;
};

export type Genre = {
  __typename?: 'Genre';
  country?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

export type Member = {
  __typename?: 'Member';
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  instrument?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  secondName?: Maybe<Scalars['String']>;
  years?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: Album;
  createArtist: Artist;
  createBand: Band;
  createGenre: Genre;
  createTrack: Track;
  deleteAlbum: DeleteResponse;
  deleteArtist: DeleteResponse;
  deleteBand: DeleteResponse;
  deleteGenre: DeleteResponse;
  deleteTrack: DeleteResponse;
  updateAlbum: Album;
  updateArtist: Artist;
  updateBand: Band;
  updateGenre: Genre;
  updateTrack: Track;
};


export type MutationCreateAlbumArgs = {
  input: CreateAlbumInput;
};


export type MutationCreateArtistArgs = {
  input: CreateArtistInput;
};


export type MutationCreateBandArgs = {
  input: CreateBandInput;
};


export type MutationCreateGenreArgs = {
  input: CreateGenreInput;
};


export type MutationCreateTrackArgs = {
  input: CreateTrackInput;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteArtistArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteBandArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteGenreArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTrackArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAlbumArgs = {
  id: Scalars['ID'];
  input: UpdateAlbumInput;
};


export type MutationUpdateArtistArgs = {
  id: Scalars['ID'];
  input: UpdateArtistInput;
};


export type MutationUpdateBandArgs = {
  id: Scalars['ID'];
  input: UpdateBandInput;
};


export type MutationUpdateGenreArgs = {
  id: Scalars['ID'];
  input: UpdateGenreInput;
};


export type MutationUpdateTrackArgs = {
  id: Scalars['ID'];
  input: UpdateTrackInput;
};

export type Query = {
  __typename?: 'Query';
  album?: Maybe<Album>;
  albums: Array<Album>;
  artist: Artist;
  artists: Array<Artist>;
  band?: Maybe<Band>;
  bands: Array<Band>;
  favourites?: Maybe<Favourites>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  jwt?: Maybe<Scalars['String']>;
  track?: Maybe<Track>;
  tracks: Array<Track>;
  user?: Maybe<User>;
};


export type QueryAlbumArgs = {
  id: Scalars['ID'];
};


export type QueryArtistArgs = {
  id: Scalars['ID'];
};


export type QueryBandArgs = {
  id: Scalars['ID'];
};


export type QueryGenreArgs = {
  id: Scalars['ID'];
};


export type QueryJwtArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type QueryTrackArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Track = {
  __typename?: 'Track';
  album?: Maybe<Album>;
  artists?: Maybe<Array<Maybe<Artist>>>;
  bands?: Maybe<Array<Maybe<Band>>>;
  duration?: Maybe<Scalars['Int']>;
  genres?: Maybe<Array<Maybe<Genre>>>;
  id: Scalars['ID'];
  released?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type UpdateAlbumInput = {
  artistsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['Int']>;
  trackIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UpdateArtistInput = {
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  birthDate?: InputMaybe<Scalars['String']>;
  birthPlace?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  instruments?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  middleName?: InputMaybe<Scalars['String']>;
  secondName?: InputMaybe<Scalars['String']>;
};

export type UpdateBandInput = {
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  members?: InputMaybe<Array<InputMaybe<UpdateMemberInput>>>;
  name?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateGenreInput = {
  country?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

export type UpdateMemberInput = {
  artistId?: InputMaybe<Scalars['ID']>;
  instrument?: InputMaybe<Scalars['String']>;
  years?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UpdateTrackInput = {
  albumId?: InputMaybe<Scalars['String']>;
  artistsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  bandsIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  duration?: InputMaybe<Scalars['Int']>;
  genresIds?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  released?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Album: ResolverTypeWrapper<AlbumResponse>;
  Artist: ResolverTypeWrapper<ArtistResponse>;
  Band: ResolverTypeWrapper<BandResponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateAlbumInput: CreateAlbumInput;
  CreateArtistInput: CreateArtistInput;
  CreateBandInput: CreateBandInput;
  CreateGenreInput: CreateGenreInput;
  CreateMemberInput: CreateMemberInput;
  CreateTrackInput: CreateTrackInput;
  DeleteResponse: ResolverTypeWrapper<DeleteResponse>;
  Favourites: ResolverTypeWrapper<FavouritesResponse>;
  Genre: ResolverTypeWrapper<GenreResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Member: ResolverTypeWrapper<Member>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Track: ResolverTypeWrapper<TrackResponse>;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateArtistInput: UpdateArtistInput;
  UpdateBandInput: UpdateBandInput;
  UpdateGenreInput: UpdateGenreInput;
  UpdateMemberInput: UpdateMemberInput;
  UpdateTrackInput: UpdateTrackInput;
  User: ResolverTypeWrapper<UserResponse>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Album: AlbumResponse;
  Artist: ArtistResponse;
  Band: BandResponse;
  Boolean: Scalars['Boolean'];
  CreateAlbumInput: CreateAlbumInput;
  CreateArtistInput: CreateArtistInput;
  CreateBandInput: CreateBandInput;
  CreateGenreInput: CreateGenreInput;
  CreateMemberInput: CreateMemberInput;
  CreateTrackInput: CreateTrackInput;
  DeleteResponse: DeleteResponse;
  Favourites: FavouritesResponse;
  Genre: GenreResponse;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Member: Member;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  Track: TrackResponse;
  UpdateAlbumInput: UpdateAlbumInput;
  UpdateArtistInput: UpdateArtistInput;
  UpdateBandInput: UpdateBandInput;
  UpdateGenreInput: UpdateGenreInput;
  UpdateMemberInput: UpdateMemberInput;
  UpdateTrackInput: UpdateTrackInput;
  User: UserResponse;
};

export type AlbumResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  bands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Band']>>>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  released?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArtistResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  bands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Band']>>>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instruments?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BandResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Band'] = ResolversParentTypes['Band']> = {
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  members?: Resolver<Maybe<Array<Maybe<ResolversTypes['Member']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['DeleteResponse'] = ResolversParentTypes['DeleteResponse']> = {
  acknowledged?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  deletedCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FavouritesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Favourites'] = ResolversParentTypes['Favourites']> = {
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  bands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Band']>>>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tracks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Track']>>>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instrument?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  middleName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  secondName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  years?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationCreateAlbumArgs, 'input'>>;
  createArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationCreateArtistArgs, 'input'>>;
  createBand?: Resolver<ResolversTypes['Band'], ParentType, ContextType, RequireFields<MutationCreateBandArgs, 'input'>>;
  createGenre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType, RequireFields<MutationCreateGenreArgs, 'input'>>;
  createTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationCreateTrackArgs, 'input'>>;
  deleteAlbum?: Resolver<ResolversTypes['DeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteAlbumArgs, 'id'>>;
  deleteArtist?: Resolver<ResolversTypes['DeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteArtistArgs, 'id'>>;
  deleteBand?: Resolver<ResolversTypes['DeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteBandArgs, 'id'>>;
  deleteGenre?: Resolver<ResolversTypes['DeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteGenreArgs, 'id'>>;
  deleteTrack?: Resolver<ResolversTypes['DeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteTrackArgs, 'id'>>;
  updateAlbum?: Resolver<ResolversTypes['Album'], ParentType, ContextType, RequireFields<MutationUpdateAlbumArgs, 'id' | 'input'>>;
  updateArtist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<MutationUpdateArtistArgs, 'id' | 'input'>>;
  updateBand?: Resolver<ResolversTypes['Band'], ParentType, ContextType, RequireFields<MutationUpdateBandArgs, 'id' | 'input'>>;
  updateGenre?: Resolver<ResolversTypes['Genre'], ParentType, ContextType, RequireFields<MutationUpdateGenreArgs, 'id' | 'input'>>;
  updateTrack?: Resolver<ResolversTypes['Track'], ParentType, ContextType, RequireFields<MutationUpdateTrackArgs, 'id' | 'input'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType, RequireFields<QueryArtistArgs, 'id'>>;
  artists?: Resolver<Array<ResolversTypes['Artist']>, ParentType, ContextType>;
  band?: Resolver<Maybe<ResolversTypes['Band']>, ParentType, ContextType, RequireFields<QueryBandArgs, 'id'>>;
  bands?: Resolver<Array<ResolversTypes['Band']>, ParentType, ContextType>;
  favourites?: Resolver<Maybe<ResolversTypes['Favourites']>, ParentType, ContextType>;
  genre?: Resolver<Maybe<ResolversTypes['Genre']>, ParentType, ContextType, RequireFields<QueryGenreArgs, 'id'>>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  jwt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryJwtArgs, 'email' | 'password'>>;
  track?: Resolver<Maybe<ResolversTypes['Track']>, ParentType, ContextType, RequireFields<QueryTrackArgs, 'id'>>;
  tracks?: Resolver<Array<ResolversTypes['Track']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
};

export type TrackResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Track'] = ResolversParentTypes['Track']> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>;
  artists?: Resolver<Maybe<Array<Maybe<ResolversTypes['Artist']>>>, ParentType, ContextType>;
  bands?: Resolver<Maybe<Array<Maybe<ResolversTypes['Band']>>>, ParentType, ContextType>;
  duration?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<Maybe<ResolversTypes['Genre']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  released?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  password?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  Album?: AlbumResolvers<ContextType>;
  Artist?: ArtistResolvers<ContextType>;
  Band?: BandResolvers<ContextType>;
  DeleteResponse?: DeleteResponseResolvers<ContextType>;
  Favourites?: FavouritesResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Track?: TrackResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

