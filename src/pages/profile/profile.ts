import { Component } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { App } from 'ionic-angular';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public user: User;
    public token: string;
    public charitiesDonatedTo: Charity[];
    

    constructor(public navCtrl: NavController, public navParams: NavParams, 
        public http: Http,  public app: App
    ) {

        this.token = localStorage.getItem("TOKEN");
        var jsBody = verify(this.token, 'shh');
        this.user = jsBody.user;
        console.log(this.user.username);

        let callback = (err) => {
            if (err) {
              // TODO: display error
              return;
            }
      
            this.navCtrl.push(ProfilePage);
          }

        this.http
            .get("http://localhost:3000/donation1/charitiesDonatedTo?jwt="+ this.token)
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
        console.log("Charities Donated to is:",this.charitiesDonatedTo);

    }


    username: string;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    logout() {
        //this.authServ.navigatetoHome (); // this is a function to logout from the server
        const root = this.app.getRootNav (); // in this line, you have to declare a root, which is the app's root 
        root.popToRoot (); // here you go to the root.
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
}
