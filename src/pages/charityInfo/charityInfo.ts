import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PaymentsPage } from '../payments/payments';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';

@Component({
    selector: 'page-charityInfo',
    templateUrl: 'charityInfo.html'
})
export class CharityPage {

    public charity: Charity;
    public user: User;
    public token: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.charity = this.navParams.get("charity");
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
    DonationStatus: boolean = true;

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage, {
            username: this.username
        });
    }

    navigatetoPayments(charity: Charity) {
        this.navCtrl.push(PaymentsPage, {
            charity: charity,
            DonationStatus: this.DonationStatus
        });
    }


}