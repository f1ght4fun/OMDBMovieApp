import { OmDBType } from '../enums/omdb-entry-type.enum';

export interface OmDBSearchModel {
  Search: OmDBEntryModel[];
  totalResults: number;
}

export interface OmDBEntryModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: OmDBType;
  Poster: string;
}
