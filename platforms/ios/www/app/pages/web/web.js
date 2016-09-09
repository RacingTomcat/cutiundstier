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
var global_vars_1 = require('../../providers/global-vars/global-vars');
var kontakt_1 = require('../../pages/kontakt/kontakt');
var projekte_1 = require('../../pages/projekte/projekte');
var team_1 = require('../../pages/team/team');
var WebPage = (function () {
    function WebPage(nav, global, kontaktPage, projektePage, teamPage) {
        this.nav = nav;
        this.global = global;
        this.kontaktPage = kontaktPage;
        this.projektePage = projektePage;
        this.teamPage = teamPage;
        this.nav_title = 'Web';
        this.title = "Webentwicklung";
    }
    WebPage.prototype.openPage = function () {
        // with BACK-Button
        this.nav.push(WebPage);
        // with MENU-Button
        //this.nav.setRoot(WebPage);
    };
    WebPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/web/web.html',
            providers: [kontakt_1.KontaktPage, projekte_1.ProjektePage, team_1.TeamPage]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Nav, global_vars_1.GlobalVars, kontakt_1.KontaktPage, projekte_1.ProjektePage, team_1.TeamPage])
    ], WebPage);
    return WebPage;
}());
exports.WebPage = WebPage;
