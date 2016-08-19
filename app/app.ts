import { Component, ViewChild } from '@angular/core';
import { App, Events, ionicBootstrap, Nav, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { GlobalVars } from './providers/global-vars/global-vars'

import { AppPage } from './pages/app/app';
import { KontaktPage } from './pages/kontakt/kontakt';
import { LeistungenPage } from './pages/leistungen/leistungen';
import { ProjektePage } from './pages/projekte/projekte';
import { StartPage } from './pages/startseite/startseite';
import { TeamPage } from './pages/team/team';
import { WebPage } from './pages/web/web';

interface PageObj {
    title: string;
    component: any;
    icon: string;
    image: string;
    index?: number;
}

@Component({
    templateUrl: 'build/app.html',
    providers: [GlobalVars]
})

class CusApp {
  @ViewChild(Nav) nav: Nav;

  appPages: PageObj[] = [
      { title: 'Startseite', icon: 'home', image: '', component: StartPage },
      { title: 'Web', icon: '', image: 'images/Icon_Webentwicklung.png', component: WebPage },
      { title: 'App', icon: '', image: 'images/Icon_Appentwicklung.png', component: AppPage },
      { title: 'Leistungen', icon: '', image: 'images/Icon_Leistungen.png', component: LeistungenPage },
      { title: 'Projekte', icon: '', image: 'images/Icon_Projekte.png', component: ProjektePage },
      { title: 'Team', icon: '', image: 'images/Icon_Team.png', component: TeamPage },
      { title: 'Kontakt', icon: '', image: 'images/Icon_Kontakt.png', component: KontaktPage }
  ];
  loggedInPages: PageObj[] = [

  ];
  loggedOutPages: PageObj[] = [

  ];
  rootPage: any = StartPage;


  constructor(platform: Platform) {
      // Call any initial plugins when ready
      platform.ready().then(() => {
          //StatusBar.styleDefault();
          //Splashscreen.hide();
      });
  }

  openPage(page) {
      // the nav component was found using @ViewChild(Nav)
      // reset the nav to remove previous pages and only have this page
      // we wouldn't want the back button to show in this scenario
      if (page.index) {
          this.nav.setRoot(page.component, { tabIndex: page.index });
      } else {
          this.nav.setRoot(page.component);
      }
  }
}

ionicBootstrap(CusApp, null, { mode: 'md' });
//ionicBootstrap(CusApp); 
