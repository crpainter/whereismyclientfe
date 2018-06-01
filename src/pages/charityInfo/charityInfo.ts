import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';

@Component({
    selector: 'page-charityInfo',
    templateUrl: 'charityInfo.html'
})
export class CharityPage {

    public charity: Charity;
    public user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.charity = this.navParams.get("charity");
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
            username: this.username
        });
    }


}