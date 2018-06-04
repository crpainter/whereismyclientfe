import { Charity } from '../models.ts/Charity';

export class User {
    name: string;
    password: string;
    charitiesDonatedTo: Array<Charity> = [];
    charitiesNotDonatedTo: Array<Charity> = []
}