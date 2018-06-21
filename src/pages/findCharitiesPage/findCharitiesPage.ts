import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PaymentsPage } from '../payments/payments';
import { Http } from "@angular/http";
import { CharityPage } from "../charityInfo/charityInfo";
import { AuthService } from "../../auth.service";

@Component({
    selector: 'page-findCharitiesPage',
    templateUrl: 'findCharitiesPage.html'
})
export class FindCharitiesPage {

    public user: User;
    public token: string;

    DonationStatus: boolean = false;
    public charitiesAll: Charity[];

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    featuredimage1: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthService) {
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
            .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
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
            .get(this.authService.getBaseUrl() + "/charity", this.token)
            .subscribe(
                result => {
                    this.charitiesAll = result.json();
                },

                error => {
                    callback(error);
                }
            );

    }



    navigateToProfile() {

        this.navCtrl.push(ProfilePage, {
            user: this.user,
        });
    }

    navigateToPayments(charity: Charity) {
        this.navCtrl.push(PaymentsPage, {
            user: this.user,
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    }

    navigateToCharityInfo(charity: Charity) {
        this.navCtrl.push(CharityPage, {
            charity: charity
        });
    }



}