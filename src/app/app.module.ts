import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { FavoritePage } from '../pages/favorite/favorite';
import { Http } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../providers/database/database';



@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    SignupPage,
    FavoritePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    SignupPage,
    FavoritePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Http,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
