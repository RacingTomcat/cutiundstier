import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { GlobalVars } from './providers/global-vars/global-vars'

import { AppPage } from './pages/app/app';
import { KontaktPage } from './pages/kontakt/kontakt';
import { LeistungenPage } from './pages/leistungen/leistungen';
import { ProjektePage } from './pages/projekte/projekte';
import { StartPage } from './pages/startseite/startseite';
import { TeamPage } from './pages/team/team';
import { WebPage } from './pages/web/web';

@Component({
  templateUrl: 'build/app.html',
  providers: [GlobalVars]
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = StartPage;
  pages: Array<{title: string, icon: string, image: string, component: any}>

  constructor(private platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
        { title: 'Startseite', icon: 'home', image: '', component: StartPage },
        { title: 'Web', icon: '', image: 'images/Icon_Webentwicklung.png', component: WebPage },
        { title: 'App', icon: '', image: 'images/Icon_Appentwicklung.png', component: AppPage },
        { title: 'Leistungen', icon: '', image: 'images/Icon_Service.png', component: LeistungenPage },
        { title: 'Projekte', icon: '', image: 'images/Icon_Projekte.png', component: ProjektePage },
        { title: 'Team', icon: '', image: 'images/Icon_Team.png', component: TeamPage },
        { title: 'Kontakt', icon: '', image: 'images/Icon_Kontakt.png', component: KontaktPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
