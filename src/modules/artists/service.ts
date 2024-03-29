import { dotEnvConfig } from '../../config';
import { Service } from '../../common';
import { ArtistResponse } from './types';

export class ArtistsService extends Service<ArtistResponse> {
  constructor() {
    super(dotEnvConfig.ARTISTS_API);
  }
}
