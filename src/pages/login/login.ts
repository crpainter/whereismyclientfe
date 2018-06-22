import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
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
        private alertCtrl: AlertController,

    ) { }

    ionViewDidLoad() {
        console.log("ionViewDidLoad LoginPage");
    }


    navigatetoProfile() {

        let callback = (err) => {
            if (err) {
                // TODO: display error

                this.navCtrl.push(TabsPage);
                let alert = this.alertCtrl.create({
                    title: 'Whoops, try again',
                    buttons: ['Ok']
                });
              console.log('Donate clicked');
          
              alert.present();
                return;
            }
            this.navCtrl.push(TabsPage);
            let alert = this.alertCtrl.create({
                title: 'Welcome to Golden Thread',
                buttons: ['Ok']
              });
              console.log('Donate clicked');
          
              alert.present();
        }

        this.authService.login(this.username, this.password, callback);

    }


}
