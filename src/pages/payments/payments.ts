import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { PortfolioPage } from '../portfolio/portfolio';
import { Stripe } from '@ionic-native/stripe';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App, private stripe: Stripe) {
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

    ionViewDidLoad() {
        this.stripe.setPublishableKey('my_publishable_key');

        let card = {
            number: '4242424242424242',
            expMonth: 12,
            expYear: 2020,
            cvc: '220'
        };

        this.stripe.createCardToken(card)
            .then(token => console.log(token.id))
            .catch(error => console.error(error));
    }

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
            .post("http://localhost:3000/user/charity/addDonation?jwt=" + this.token + "&charity_id=" + this.charity.id + "&donation_amount=" + this.deposit, {})
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