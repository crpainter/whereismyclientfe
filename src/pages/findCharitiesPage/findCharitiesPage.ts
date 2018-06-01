import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PaymentsPage } from '../payments/payments';

@Component({
    selector: 'page-findCharitiesPage',
    templateUrl: 'findCharitiesPage.html'
})
export class FindCharitiesPage {

    public user: User;

    DonationStatus: boolean= false;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user = this.navParams.get("user");
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