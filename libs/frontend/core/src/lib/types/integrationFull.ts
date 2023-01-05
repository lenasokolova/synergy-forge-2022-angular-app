import { ICategory } from './category';
import { IVersion } from './version';
import { IIntegration } from './integration';

export interface IIntegrationFull extends IIntegration {
    categories: ICategory[];
    versions: IVersion;
}