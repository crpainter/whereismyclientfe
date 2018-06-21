import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams, AlertController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { Charity } from '../models.ts/Charity';
import { User } from '../models.ts/User';
import { verify } from 'jsonwebtoken';
import { Http } from "@angular/http";
import { PortfolioPage } from '../portfolio/portfolio';
import { App } from 'ionic-angular';
import { StripeJavaScriptPage } from './../stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../stripe-native/stripe-native';

declare var Stripe;

@Component({
    selector: 'page-payments',
    templateUrl: 'payments.html'
})
export class PaymentsPage {

    stripe = Stripe('pk_test_9xDCoJstNY3XTH470KJmBNzU');
    card: any;
    public charity: Charity;
    public user: User = new User();
    public DonationStatus: boolean;
    public token: string;
    date: Date;
    curency: string;
    oneTime: boolean;
    monthly: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public app: App, private alertCtrl: AlertController) {
        this.charity = this.navParams.get("charity");
        this.DonationStatus = this.navParams.get("DonationStatus");
        this.token = localStorage.getItem("TOKEN");
        console.log("profile token: ", this.token);

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

    username: string;
    charityInfo: object;
    description: string;
    logourl: string;
    siteurl: string;
    deposit: number;

    ionViewDidLoad() {
        this.setupStripe();
    }

    oneTimeTrue() {
        this.oneTime = true;
        this.monthly = false;
      }
    
      monthlyTrue() {
        this.oneTime = false;
        this.monthly = true;
      }

    setupStripe() {
        let elements = this.stripe.elements();
        var style = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };

        this.card = elements.create('card', { style: style });

        this.card.mount('#card-element');

        this.card.addEventListener('change', event => {
            var displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });

        var form = document.getElementById('payment-form');
        form.addEventListener('submit', event => {
            event.preventDefault();

            // this.stripe.createToken(this.card) this.stripe.createSource(this.card)
            if (this.oneTime) {
                this.stripe.createToken(this.card)
                    .then(result => {
                        if (result.error) {
                            var errorElement = document.getElementById('card-errors');
                            errorElement.textContent = result.error.message;
                        } else {
                            console.log(result.token);
                            this.stripeTokenHandler(result.token);
                            this.navCtrl.setRoot(PortfolioPage);
                            this.donationSuccessful();
                        }
                    })
            } else {
                // var ownerInfo = {
                //   owner: {
                //     name: this.name,
                //     address: {
                //       line1: this.address_line1,
                //       city: this.address_city,
                //       postal_code: this.address_zip,
                //       country: this.address_country,
                //     },
                //     //email: 'jenny.rosen@example.com'
                //   },
                // };

                // Un-comment below when ready to allow recurring payments

                // this.stripe.createSource(this.card)
                //     .then(result => {
                //         if (result.error) {
                //             // Inform the user if there was an error
                //             var errorElement = document.getElementById('card-errors');
                //             errorElement.textContent = result.error.message;
                //         } else {
                //             // Send the source to your server
                //             this.stripeSourceHandler(result.source);
                //             this.navCtrl.setRoot(PortfolioPage);
                //             this.donationSuccessful();
                //         }
                //     });
            }
        });
    }

    stripeTokenHandler(token) {
        this.http
          .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("Token"), {
            paymenttoken: token.id,
            amount: this.deposit,
            curency: this.curency,
            date: new Date().toDateString(),
            time: new Date().toTimeString()
          })
    
          .subscribe(
            result => {
              console.log(result);
            },
    
            error => {
              console.log(error);
            });
      }

    // Un-comment below when ready to allow recurring payments

    // stripeSourceHandler(source) {
    //     this.http
    //       .post("http://localhost:3000/payment?jwt=" + localStorage.getItem("Token"), {
    //         cardholder: this.name,
    //         paymenttoken: source.id,
    //         amount: this.deposit,
    //         date: new Date().toDateString(),
    //         time: new Date().toTimeString()
    //       })
    
    //       .subscribe(
    //         result => {
    //           console.log(result);
    //         },
    
    //         error => {
    //           console.log(error);
    //         });
    //   }
    
      donationSuccessful() {
          console.log("Donation was definitely successful")
        let alert = this.alertCtrl.create({
          title: 'Donation Successful',
          subTitle: 'Thank you for donating!',
          buttons: ['Ok']
        });
        console.log('Donate clicked');
    
        alert.present();
      }

    navigatetoProfile() {
        this.navCtrl.push(ProfilePage);
    }

    openJavaScript() {
        this.navCtrl.push(StripeJavaScriptPage)
    }

    openNative() {
        this.navCtrl.push(StripeNativePage)
    }

    navigatetoPortfolio() {

        let callback = (err) => {
            if (err) {
                // TODO: display error
                return;
            }

        }

        this.http
            .post("http://localhost:3000/user/charity/addDonation?jwt=" + this.token + "&charity_id=" + this.charity.id + "&donation_amount=" + this.deposit, {})
            .subscribe(
                result => {

                    // The log below says it all, this code is allowing this form to "function" even though the strip logic isn't completely functioning correctly.
                    console.log("And I wouldn't have gotten away with it either if it weren't for that meddling http property.")
                    this.navCtrl.push(PortfolioPage, {
                        user: this.user
                    });
                },

                error => {
                    callback(error);
                }
            );
    }


}