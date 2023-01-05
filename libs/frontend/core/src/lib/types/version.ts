import { ICategoryItem } from './categoryItem';

export interface IVersion {
    id: number,
    name: string,
    integrationId: number,
    isFinal: boolean,
    categoryItems: ICategoryItem[],
}

