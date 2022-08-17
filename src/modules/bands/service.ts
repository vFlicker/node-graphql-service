import { dotEnvConfig } from '../../config';
import { Service } from '../../common';
import { BandResponse } from './types';

export class BandsService extends Service<BandResponse> {
  constructor() {
    super(dotEnvConfig.BANDS_API);
  }
}
