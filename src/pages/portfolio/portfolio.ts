import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CharityPage } from '../charityInfo/charityInfo';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { HomePage } from '../home/home';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { App } from 'ionic-angular';
import { Chart } from 'chart.js'
import { AuthService } from "../../auth.service";

@Component({
    selector: 'page-portfolio',
    templateUrl: 'portfolio.html'
})
export class PortfolioPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart: any;

    public charity: Charity;
    public user = new User();
    private token: string;
    public charitiesDonatedTo: Charity[];

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    featuredimage1: string;



    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App, public authService: AuthService) {
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .get(this.authService.getBaseUrl() +  "/user?jwt=" + this.token)
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


    }

    ionViewDidLoad() {

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .get("http://localhost:3000/donation1/charitiesDonatedTo?jwt=" + this.token)
            .subscribe(
                result => {
                    this.charitiesDonatedTo = result.json();
                    console.log("My charitiesDonatedTo was=")
                    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
                        type: 'doughnut',
                        data: {
                            labels: this.charitiesDonatedTo.map(function (e) { return e.name; }),
                            datasets: [{
                                label: 'Dollars Donated',
                                data: this.charitiesDonatedTo.map(function (e) { return e.userDonationTotal; }),
                                backgroundColor: [
                                    '#FF007B',
                                    '#BF7B21',
                                    '#00CCE2',
                                    '#00CCE2',
                                    '#00CCE2',
                                    '#00CCE2'
                                ],
                                hoverBackgroundColor: [
                                    "#FF007B",
                                    "#36A2EB",
                                    "#FFCE56",
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                        }
                    });
                },

                error => {
                    callback(error);
                }
            );
    }

    

    navigatetoHome() {
        this.navCtrl.push(HomePage);
    }


    navigatetoPortfolio() {
        this.navCtrl.push(PortfolioPage);
    }


    navigateToCharityInfo(charity: Charity) {
        this.navCtrl.push(CharityPage, {
        charity: charity
        });   
    }
    


}