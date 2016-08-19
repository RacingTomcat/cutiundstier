"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var global_vars_1 = require('./providers/global-vars/global-vars');
var app_1 = require('./pages/app/app');
var kontakt_1 = require('./pages/kontakt/kontakt');
var leistungen_1 = require('./pages/leistungen/leistungen');
var projekte_1 = require('./pages/projekte/projekte');
var startseite_1 = require('./pages/startseite/startseite');
var team_1 = require('./pages/team/team');
var web_1 = require('./pages/web/web');
var CusApp = (function () {
    function CusApp(platform) {
        this.appPages = [
            { title: 'Startseite', icon: 'home', image: '', component: startseite_1.StartPage },
            { title: 'Web', icon: '', image: 'images/Icon_Webentwicklung.png', component: web_1.WebPage },
            { title: 'App', icon: '', image: 'images/Icon_Appentwicklung.png', component: app_1.AppPage },
            { title: 'Leistungen', icon: '', image: 'images/Icon_Leistungen.png', component: leistungen_1.LeistungenPage },
            { title: 'Projekte', icon: '', image: 'images/Icon_Projekte.png', component: projekte_1.ProjektePage },
            { title: 'Team', icon: '', image: 'images/Icon_Team.png', component: team_1.TeamPage },
            { title: 'Kontakt', icon: '', image: 'images/Icon_Kontakt.png', component: kontakt_1.KontaktPage }
        ];
        this.loggedInPages = [];
        this.loggedOutPages = [];
        this.rootPage = startseite_1.StartPage;
        // Call any initial plugins when ready
        platform.ready().then(function () {
            //StatusBar.styleDefault();
            //Splashscreen.hide();
        });
    }
    CusApp.prototype.openPage = function (page) {
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], CusApp.prototype, "nav", void 0);
    CusApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html',
            providers: [global_vars_1.GlobalVars]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], CusApp);
    return CusApp;
}());
ionic_angular_1.ionicBootstrap(CusApp, null, { mode: 'md' });
//ionicBootstrap(CusApp); 
