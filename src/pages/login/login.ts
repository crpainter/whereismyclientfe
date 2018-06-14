import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { User } from '../models.ts/User';
import { Http } from '@angular/http';
import { AuthService } from "../../auth.service";

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
        public authService: AuthService
    ) {}

    ionViewDidLoad(){
        console.log("ionViewDidLoad LoginPage");
    }

    navigatetoProfile() {
        let callback = (err) => {
          if (err) {
            // TODO: display error
            return;
          }
    
          this.navCtrl.push(ProfilePage);
        }
    
        this.authService.login(this.username, this.password, callback);
      }


}
