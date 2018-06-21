import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PaymentsPage } from '../payments/payments';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";

@Component({
    selector: 'page-charityInfo',
    templateUrl: 'charityInfo.html'
})
export class CharityPage {

    public charity: Charity;
    public user: User;
    public token: string;

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    featuredimage1: string;

    DonationStatus: boolean = true;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .get("http://localhost:3000/user?jwt=" + this.token)
            .subscribe(
                result => {
                    this.user = result.json();

                    console.log("this user: " + this.user)
                    console.log("result.json " + result.json())
                },

                error => {
                    callback(error);
                }
            );
    }

    

   
    navigateToProfile() {
        this.navCtrl.push(ProfilePage, {
            username: this.username
        });
    }

    navigateToPayments(charity: Charity) {
        this.navCtrl.push(PaymentsPage, {
            charity: charity,
            DonationStatus: this.DonationStatus, 
        });
    }


}