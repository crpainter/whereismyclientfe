import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';

@Component({
    selector: 'charityInfo-login',
    templateUrl: 'charityInfo.html'
})
export class CharityPage {

    public charity: Charity;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.charity = this.navParams.get("charity");
    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage, {
            username: this.username
        });
    }


}