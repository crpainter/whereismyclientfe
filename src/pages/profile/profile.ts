import { Component } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';
import { Http } from "@angular/http";
import { App } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AuthService } from "../../auth.service";

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public user: User = new User();
    public token: string;
    public charitiesDonatedTo: Charity[];



    username: string;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;



    constructor(public navCtrl: NavController, public navParams: NavParams,
        public http: Http, public app: App, public authService: AuthService
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
            .get(this.authService.getBaseUrl() +"/user?jwt=" + this.token)
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
        console.log("My user is:"+ this.user.username);

        this.http
            .get(this.authService.getBaseUrl() +"/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(
                result => {
                    this.charitiesDonatedTo = result.json();
                },

                error => {
                    callback(error);
                }
            );

    }

    ionViewDidLoad() {
        console.log("Charities Donated to is:", this.charitiesDonatedTo);

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
