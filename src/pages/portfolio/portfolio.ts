import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { CharityPage } from '../charityInfo/charityInfo';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { HomePage } from '../home/home';
import { Chart } from 'chart.js'

@Component({
    selector: 'page-portfolio',
    templateUrl: 'portfolio.html'
})
export class PortfolioPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart: any;

    public charity: Charity;
    public user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user = this.navParams.get("user");
    }

    ionViewDidLoad() {

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ["AMF", "SCI", "THL"],
                datasets: [{
                    label: 'Dollars Donates',
                    data: [120, 190, 70],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
            }
        });
    }

    username: string;
    charityInfo: object;
    name: string;
    description: string;
    logourl: string;
    siteurl: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage);
    }

    navigatetoFindCharities() {
        this.navCtrl.push(FindCharitiesPage, {
            user: this.user
        });
    }

    navigatetoPortfolio() {
        this.navCtrl.push(PortfolioPage, {
            user: this.user
        });
    }


    navigateToCharity(charity: Charity) {

        this.navCtrl.push(CharityPage, {
            charity: charity,
            user: this.user
        });
    }


}