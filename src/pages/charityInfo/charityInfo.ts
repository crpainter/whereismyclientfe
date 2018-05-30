import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
    selector: 'charityInfo-login',
    templateUrl: 'charityInfo.html'
})
export class CharityPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name = navParams.get('name');
        this.description = navParams.get('description')
    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage, {
            username: this.username
        });
    }


}