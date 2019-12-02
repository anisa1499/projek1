import { Component, ViewChild } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

import {Http, Headers, RequestOptions}  from "@angular/http";

import { LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { SigninPage } from '../signin/signin';

@Component({

selector: 'page-signup',
templateUrl: 'signup.html'

})

export class SignupPage {

@ViewChild("Nama") nama;

@ViewChild("Email") email;

@ViewChild("Username") username;

@ViewChild("Password") password;

constructor(public navCtrl: NavController, public alertCtrl: AlertController,  private http: Http,  public loading: LoadingController) {

}

Login(){
  this.navCtrl.push(SigninPage);
}

Register(){

//// check to confirm the username, email, telephone and password fields are filled

if(this.nama.value==""){

let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"Nama field is empty",

buttons: ['OK']

});

alert.present();

} else

if(this.email.value==""){

let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"Email field is empty",

buttons: ['OK']

});

alert.present();

}

else

if(this.username.value=="" ){

let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"Mobile number field is empty",

buttons: ['OK']

});

alert.present();

} else

if(this.password.value==""){

let alert = this.alertCtrl.create({

title:"ATTENTION",

subTitle:"Password field is empty",

buttons: ['OK']

});

alert.present();

}

else

{

var headers = new Headers();

headers.append("Accept", 'application/json');

headers.append('Content-Type', 'application/json' );

let options = new RequestOptions({ headers: headers });

let data = {

username: this.nama.value,

password: this.email.value,

mobile: this.username.value,

email: this.password.value

};

let loader = this.loading.create({

content: 'Processing please wait…',

});

loader.present().then(() => {

this.http.post('http://ionicdon.com/mobile/register.php',data, options)

.map(res => res.json())

.subscribe(res => {

loader.dismiss()

if(res=="Registration successfull"){

let alert = this.alertCtrl.create({

title:"CONGRATS",

subTitle:(res),

buttons: ['OK']

});

alert.present();

this.navCtrl.push(SigninPage);

}else

{

let alert = this.alertCtrl.create({

title:"ERROR",

subTitle:(res),

buttons: ['OK']

});

alert.present();

}

});

});

}

}

}