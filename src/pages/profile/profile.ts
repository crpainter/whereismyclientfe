import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CharityPage } from '../charityInfo/charityInfo';

@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.username = navParams.get('username');
    }

    username: string;
    name: string;
    description: string;

    navigatetoHome() {
        this.navCtrl.push(HomePage);
    }


    navigateToCharity(charityName) {
        switch(charityName) {
            case 'Schistosomiasis Control Initiative':
                this.name = "Schistosomiasis Control Initiative";
                this.description = "The Schistosomiasis Control Initiative provides pills that help cure those who are infected with nutrient-sucking parasites.";
                break;
            case 'Against Malaria Foundation':
                this.name = "Against Malaria Foundation";
                this.description = "The Against Malaria Foundation provides bednets to people at risk for contracting Malaria.";
                break;
        }
        this.navCtrl.push(CharityPage, {
            name: this.name,
            description: this.description
        });
    }
}
