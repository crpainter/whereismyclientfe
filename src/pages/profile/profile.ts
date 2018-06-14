import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';
import { verify } from 'jsonwebtoken';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public user: User;
    private token: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.token = localStorage.getItem("TOKEN");
        var jsBody = verify(this.token, 'shh');
        this.user = jsBody.user;
        console.log(this.user.username);
    }
    ionViewDidLoad() {

    }

    username: string;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage);
    }

    navigatetoFindCharities() {
        this.navCtrl.push(FindCharitiesPage);
    }

    navigatetoPortfolio() {
        this.navCtrl.push(PortfolioPage);
    }


    navigateToCharity(charity: Charity) {

        this.navCtrl.push(CharityPage, {
            charity: charity
        });
    }
}
