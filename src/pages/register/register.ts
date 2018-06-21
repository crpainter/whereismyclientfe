import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';
import { Http  } from '@angular/http';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from "../../auth.service";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    constructor(public navCtrl: NavController, public http: Http, public authService: AuthService) {

    }

    username: string;
    password: string;


    navigatetoLogin() {
        var user = new User()
        user.password = this.password;
        user.username = this.username;
        this.http
            .post(this.authService.getBaseUrl() +"/register", user)
            .subscribe(
                result => {
                    console.log(result);

                    // Our username and password (on this) should have data from the user
                    this.navCtrl.push(LoginPage, {
                        user: user
                    });


                },

                error => {
                    console.log(error);
                }
            );
    }

}
