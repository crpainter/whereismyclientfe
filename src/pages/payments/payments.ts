import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';

@Component({
    selector: 'page-payments',
    templateUrl: 'payments.html'
})
export class PaymentsPage {

    public charity: Charity;
    public user: User;
    public DonationStatus: boolean;
    public token: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
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

    
    

    // navigatetoPortfolio() {
    //     if (this.DonationStatus) {
    //         this.charity.userDonationTotal = +this.charity.userDonationTotal + +this.deposit;
    //     }
    //     else {
    //         var pos = this.user.charitiesNotDonatedTo.map(function(e) { return e.name; }).indexOf(this.charity.name);
    //         this.charity.userDonationTotal = +this.charity.userDonationTotal + +this.deposit;
    //         this.user.charitiesDonatedTo.push(this.charity);
    //         this.user.charitiesNotDonatedTo.splice(pos, 1);
    //     }
    //     this.navCtrl.push(PortfolioPage, {
    //         user: this.user
    //     });
    // }


}