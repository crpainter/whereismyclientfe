import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController) {

    }

    username: string;


    navigatetoProfile() {
        var user = new User()
        user.name = this.username
        this.navCtrl.push(ProfilePage, {
            user: user
        });
      }

}
