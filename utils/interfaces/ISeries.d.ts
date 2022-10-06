interface ISeries {
  id: number;
  name: string;
  trailerUri: string;
  seasons: ISeason[];
}

export interface ISeason {
  seasonNumber: number;
  name: string;
}

export default ISeries;
