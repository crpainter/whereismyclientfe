import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PaymentsPage } from '../payments/payments';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";

@Component({
    selector: 'page-findCharitiesPage',
    templateUrl: 'findCharitiesPage.html'
})
export class FindCharitiesPage {

    public user: User;
    public token: string;

    DonationStatus: boolean = false;
    public charitiesAll: Charity[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

            this.navCtrl.push(ProfilePage);
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

        this.http
            .get("http://localhost:3000/charity", this.token)
            .subscribe(
                result => {
                    this.charitiesAll = result.json();
                },

                error => {
                    callback(error);
                }
            );

    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoProfile() {

        this.navCtrl.push(ProfilePage, {
            user: this.user,
        });
    }

    navigatetoPayments(charity: Charity) {
        this.navCtrl.push(PaymentsPage, {
            user: this.user,
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    }


}