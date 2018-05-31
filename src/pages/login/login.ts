import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;

    constructor(public navCtrl: NavController) {
    
    }
    

    navigatetoProfile() {
        var user = new User()
        user.name = this.username
        this.navCtrl.push(ProfilePage, {
            user: user
        });
      }


}
