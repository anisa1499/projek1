import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { FavoritePage } from '../pages/favorite/favorite';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  signinPage= SigninPage;
  signupPage = SignupPage;
  favoritePage=FavoritePage;

@ViewChild('nav') nav: NavController;
 
constructor(platform: Platform, private menuCtrl: MenuController, statusBar: StatusBar, splashScreen: SplashScreen) {
  platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    splashScreen.hide();
  });
}

onLoad(page: any) {
  this.nav.setRoot(page);
  this.menuCtrl.close();
}

onLogout(page:any){
  this.nav.setRoot(page);
  this.menuCtrl.close();
}
}