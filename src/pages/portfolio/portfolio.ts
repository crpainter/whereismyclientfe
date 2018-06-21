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

@Component({
    selector: 'page-portfolio',
    templateUrl: 'portfolio.html'
})
export class PortfolioPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart: any;

    public charity: Charity;
    public user: User = new User();
    private token: string;
    public charitiesDonatedTo: Charity[];

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;
    featuredimage1: string;



    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App) {
        this.charity = this.navParams.get("charity");
        this.token = localStorage.getItem("TOKEN");

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .get("http://localhost:3000/user?jwt=" + this.token)
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
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
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

    navigatetoFindCharities() {
        this.navCtrl.push(FindCharitiesPage);
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