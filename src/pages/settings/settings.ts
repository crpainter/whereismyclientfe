import { Component } from '@angular/core';
import { NavController, Tab, AlertController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';
import { Http } from "@angular/http";
import { App } from 'ionic-angular';
import { AuthService } from "../../auth.service";
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public user: User = new User();
  public token: string;
  public charitiesDonatedTo: Charity[];



  username: string;
  newUsername: string;
  name: string;
  description: string;
  logourl: string;
  siteurl: string;
  password: string;
  newPassword: string;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http, public app: App, public authService: AuthService, private alertCtrl: AlertController,
  ) {

    this.token = localStorage.getItem("TOKEN");

    let callback = (err) => {
      if (err) {
        // TODO: display error
        return;
      }

      this.navCtrl.push(ProfilePage);
    }

    this.http
      .get(this.authService.getBaseUrl() + "/user?jwt=" + this.token)
      .subscribe(
        result => {
          this.user = result.json();

          console.log("this user: " + this.user)
          console.log("result.json " + result.json())
        },

        error => {
          callback(error);
        }
      );
    console.log("My user is:" + this.user.username);

  }

  ionViewDidLoad() {
    console.log("Charities Donated to is:", this.charitiesDonatedTo);

  }

  updateUserCreds() {
    this.http
      .patch(this.authService.getBaseUrl() + "/updateUser?jwt=" + this.token, {
        username: this.newUsername,
        password: this.newPassword
      })
      .subscribe(
        result => {
          var responseJson = result.json();

          // store the token in local storage
          localStorage.setItem("TOKEN", responseJson.token);
        },

        error => {

        }
      );
    const root = this.app.getRootNav(); // in this line, you have to declare a root, which is the app's root 
    root.popToRoot();
    console.log("I definitely pushed the login page")
    let alert = this.alertCtrl.create({
      title: 'Changes Saved. Please Login.',
      buttons: ['Ok']
    });
    console.log('Donate clicked');

    alert.present();
  }


  logout() {
    //this.authServ.navigatetoHome (); // this is a function to logout from the server
    const root = this.app.getRootNav(); // in this line, you have to declare a root, which is the app's root 
    root.popToRoot(); // here you go to the root.
  }

  navigatetoFindCharities() {
    this.navCtrl.push(FindCharitiesPage);
  }

  navigatetoPortfolio() {
    this.navCtrl.push(PortfolioPage);
  }


  navigateToCharity(charity: Charity) {

    this.navCtrl.push(CharityPage, {
      charity: charity
    });
  }

  navigateToSettings() {
    this.navCtrl.push(SettingsPage);
  }
}
