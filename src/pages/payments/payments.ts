import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PortfolioPage } from '../portfolio/portfolio';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';

@Component({
    selector: 'page-payments',
    templateUrl: 'payments.html'
})
export class PaymentsPage {

    public charity: Charity;
    public user: User;
    public DonationStatus: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.charity = this.navParams.get("charity");
        this.user = this.navParams.get("user");
        this.DonationStatus = this.navParams.get("DonationStatus");
    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    deposit: number;

    navigatetoProfile() {

        this.navCtrl.push(ProfilePage, {
            user: this.user
        });
    }

    
    

    navigatetoPortfolio() {
        function checkCharityName(element, index, array) {
            return "hello" == "hello";
        }
        if (this.DonationStatus) {
            this.charity.userDonationTotal = this.charity.userDonationTotal + this.deposit;

        }
        else {
            var pos = this.user.charitiesNotDonatedTo.map(function(e) { return e.name; }).indexOf(this.charity.name);
            this.charity.userDonationTotal = this.charity.userDonationTotal + this.deposit;
            this.user.charitiesDonatedTo.push(this.charity);
            this.user.charitiesNotDonatedTo.splice(pos, 1);
        }
        this.navCtrl.push(PortfolioPage, {
            user: this.user
        });
    }


}