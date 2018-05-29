import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController) {

    }

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage);
      }

}
