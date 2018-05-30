import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.username = navParams.get('username');
    }
    
    username: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage);
      }


}