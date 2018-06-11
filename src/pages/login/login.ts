import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';
import { Http } from '@angular/http';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;
    password: string;

    constructor(public navCtrl: NavController, public http: Http) {

    }


    navigatetoProfile() {
        var user = new User();
        user.username = this.username,
        user.password = this.password,
        this.http
            .post("http://localhost:3000/login", user)
            .subscribe(
                result => {
                    console.log(result);

                    // Our username and password (on this) should have data from the user
                    this.navCtrl.push(ProfilePage, {
                        user: user
                    });
                },
                error => {
                    console.log(error);
                }
            );
    }


}
