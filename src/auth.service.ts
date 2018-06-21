import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

  constructor(
    public http: Http
  ) {}

  getBaseUrl() {
    return "http://localhost:3000";
    // return "https://whereismyclient-api.herokuapp.com";
  }

  login(username: string, password: string, callback: Function) {
    this.http
      .post(this.getBaseUrl() +"/login", {
        username: username,
        password: password
      })
      .subscribe(
        result => {
          var responseJson = result.json();

          // store the token in local storage
          localStorage.setItem("TOKEN", responseJson.token);

          //this.navCtrl.push(ProfilePage);
          callback();
        },

        error => {
          callback(error);
        }
      );
  }

}
