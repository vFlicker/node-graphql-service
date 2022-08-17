import 'dotenv/config';

type ENV = {
  PORT?: number;
  ALBUMS_API?: string;
  ARTISTS_API?: string;
  BANDS_API?: string;
  FAVOURITES_API?: string;
  GENRES_API?: string;
  TRACKS_API?: string;
  USERS_API?: string;
};

type DotEnvConfig = Required<ENV>;

const getConfig = (): ENV => ({
  PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
  ALBUMS_API: process.env.ALBUMS_API,
  ARTISTS_API: process.env.ARTISTS_API,
  BANDS_API: process.env.BANDS_API,
  FAVOURITES_API: process.env.FAVOURITES_API,
  GENRES_API: process.env.GENRES_API,
  TRACKS_API: process.env.TRACKS_API,
  USERS_API: process.env.USERS_API,
});

const getSanitizedConfig = (config: ENV): DotEnvConfig => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) throw new Error(`Missing key ${key} in .env`);
  }

  return config as DotEnvConfig;
};

const config = getConfig();
export const dotEnvConfig = getSanitizedConfig(config);
