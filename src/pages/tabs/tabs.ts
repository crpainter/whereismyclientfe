import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindCharitiesPage  } from '../findCharitiesPage/findCharitiesPage'
import { HomePage } from '../home/home'
import { PortfolioPage } from '../portfolio/portfolio'
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root = ProfilePage;
  tab2Root = FindCharitiesPage;
  tab3Root = PortfolioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
