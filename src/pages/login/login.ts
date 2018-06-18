import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Http } from '@angular/http';
import { AuthService } from "../../auth.service";
import { TabsPage } from "../tabs/tabs"

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    username: string;
    password: string;

    constructor(
        public navCtrl: NavController,
        public http: Http,
        public authService: AuthService,

    ) { }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }


    navigatetoProfile() {

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }
            this.navCtrl.push(TabsPage);
        }

        this.authService.login(this.username, this.password, callback);

    }


}
