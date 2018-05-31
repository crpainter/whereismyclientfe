import { Charity } from '../models.ts/Charity';

export class User {
    name: string;
    charitiesDonatedTo: Array<Charity> = []
}