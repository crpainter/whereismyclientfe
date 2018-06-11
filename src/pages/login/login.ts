import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';
import { Charity } from '../models.ts/Charity';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;
    password: string;

    constructor(public navCtrl: NavController) {

    }


    navigatetoProfile() {
        var user = new User();
        user.username = this.username,
        user.password = this.password,
        this.navCtrl.push(ProfilePage, {
            user: user
        });
    }


}
