import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { PortfolioPage } from '../portfolio/portfolio';

import { App } from 'ionic-angular';

@Component({
    selector: 'page-payments',
    templateUrl: 'payments.html'
})
export class PaymentsPage {

    public charity: Charity;
    public user: User;
    public DonationStatus: boolean;
    public token: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App) {
        this.charity = this.navParams.get("charity");
        this.DonationStatus = this.navParams.get("DonationStatus");
        this.token = localStorage.getItem("TOKEN");
        var jsBody = verify(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = jsBody.user
    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    deposit: number;

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage);
    }




    navigatetoPortfolio() {
        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .get('/user/charity/addDonation?jwt=' + this.token + "&charity_id=" + this.charity.id + '&DonationAmount' + this.deposit)
            .subscribe(
                result => {
                    this.navCtrl.push(PortfolioPage, {
                        user: this.user
                    });
                },

                error => {
                    callback(error);
                }
            );
    }


}