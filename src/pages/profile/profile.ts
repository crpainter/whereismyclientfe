import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public charities: Array<Charity> = [];
    public user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user = this.navParams.get('user');

    }

    username: string;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage, {
            user: this.user
        });
    }

    navigatetoFindCharities() {
        this.navCtrl.push(FindCharitiesPage, {
            user: this.user
        });
    }

    navigatetoPortfolio() {
        this.navCtrl.push(PortfolioPage, {
            user: this.user
        });
    }


    navigateToCharity(charity: Charity) {

        this.navCtrl.push(CharityPage, {
            charity: charity,
            user: this.user
        });
    }
}
