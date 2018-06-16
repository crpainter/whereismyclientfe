import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { PortfolioPage } from '../portfolio/portfolio';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { TabsPage } from '../tabs/tabs'

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    public user: User;
    private token: string;
    public charitiesDonatedTo: Charity[];
    

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
        //this.navCtrl.setRoot(TabsPage);

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
            .get("http://localhost:3000/donation/charitiesDonatedTo", this.token)
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

    navigatetoHome() {
        this.navCtrl.push(HomePage);
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
