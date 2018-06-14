import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { CharityPage } from '../charityInfo/charityInfo';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { FindCharitiesPage } from '../findCharitiesPage/findCharitiesPage';
import { HomePage } from '../home/home';
import { verify } from 'jsonwebtoken';

@Component({
    selector: 'page-portfolio',
    templateUrl: 'portfolio.html'
})
export class PortfolioPage {

    @ViewChild('doughnutCanvas') doughnutCanvas;
    doughnutChart: any;

    public charity: Charity;
    public user: User;
    private token: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.user = this.navParams.get("user");
    }

    ionViewDidLoad() {
        this.token = localStorage.getItem("TOKEN");
        var User = verify(this.token, 'shh');
        console.log("profile token: ", this.token);
        this.user = User
    }

    // ionViewDidLoad() {

    //     this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
    //         type: 'doughnut',
    //         data: {
    //             labels: this.user.charitiesDonatedTo.map(function(e) { return e.name; }),
    //             datasets: [{
    //                 label: 'Dollars Donated',
    //                 data: this.user.charitiesDonatedTo.map(function(e) { return e.userDonationTotal; }),
    //                 backgroundColor: [
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(54, 162, 235, 0.2)',
    //                     'rgba(255, 206, 86, 0.2)'
    //                 ],
    //                 hoverBackgroundColor: [
    //                     "#FF6384",
    //                     "#36A2EB",
    //                     "#FFCE56"
    //                 ]
    //             }]
    //         }
    //     });
    // }

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