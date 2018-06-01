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

        var WWF = new Charity();
        WWF.name = "World Wildlife Fund";
        WWF.description = "The world’s leading conservation organization, WWF works in 100 countries and is supported by more than one million members in the United States and close to five million globally. WWF's unique way of working combines global reach with a foundation in science, involves action at every level from local to global, and ensures the delivery of innovative solutions that meet the needs of both people and nature.";
        WWF.logourl = "https://ladyofthezoos.files.wordpress.com/2013/07/panda-wwf-logo.jpg";
        WWF.siteurl = "https://www.worldwildlife.org/";
        WWF.userDonationTotal = 0;
        this.user.charitiesNotDonatedTo.push(WWF);
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