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
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var facebook_service_1 = require('../../providers/facebook-service/facebook-service');
var global_vars_1 = require("../../providers/global-vars/global-vars");
var kontakt_1 = require('../../pages/kontakt/kontakt');
var projekte_1 = require('../../pages/projekte/projekte');
var team_1 = require('../../pages/team/team');
var FacebookPage = (function () {
    function FacebookPage(navController, global, kontaktPage, projektePage, teamPage, facebookService) {
        this.navController = navController;
        this.global = global;
        this.kontaktPage = kontaktPage;
        this.projektePage = projektePage;
        this.teamPage = teamPage;
        this.facebookService = facebookService;
        this.nav_title = "Facebook";
        this.title = "Facebook-Feed";
        this.page_id = 'cutiundstier'; // YOUR_PAGE_ID_HERE
    }
    FacebookPage.prototype.ionViewDidEnter = function () {
        this.loadFacebookFeed();
    };
    FacebookPage.prototype.loadFacebookFeed = function () {
        var _this = this;
        this.facebookService.load()
            .then(function (data) {
            _this.facebook_feed = data;
        });
    };
    FacebookPage.prototype.show_more = function (id) {
        var content_div = document.getElementById(id);
        content_div.className = "expand";
        var content_button = document.getElementById(id + '_button');
        content_button.className = "expand_hide";
    };
    FacebookPage.prototype.open_facebook = function (id) {
        var ids = id.split("_");
        var win = window.open("https://www.facebook.com/" + this.page_id + "/posts/" + ids[1], "_blank");
    };
    FacebookPage.prototype.openPage = function () {
        // with BACK-Button
        this.navController.push(FacebookPage);
        // with MENU-Button
        //this.navController.setRoot(FacebookPage);
    };
    FacebookPage.prototype.convertISO8601toDate = function (dtstr) {
        // replace anything but numbers by spaces
        dtstr = dtstr.replace(/\D/g, " ");
        // trim any hanging white space
        dtstr = dtstr.replace(/\s+$/, "");
        // split on space
        var dtcomps = dtstr.split(" ");
        // not all ISO 8601 dates can convert, as is
        // unless month and date specified, invalid
        if (dtcomps.length < 3)
            return "invalid date";
        // if time not provided, set to zero
        if (dtcomps.length < 4) {
            dtcomps[3] = 0;
            dtcomps[4] = 0;
            dtcomps[5] = 0;
        }
        // modify month between 1 based ISO 8601 and zero based Date
        dtcomps[1]--;
        var convdt = new Date(Date.UTC(dtcomps[0], dtcomps[1], dtcomps[2], dtcomps[3], dtcomps[4], dtcomps[5]));
        return convdt.toLocaleString();
        ;
    };
    FacebookPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/facebook/facebook.html',
            providers: [facebook_service_1.FacebookService, kontakt_1.KontaktPage, projekte_1.ProjektePage, team_1.TeamPage]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars, kontakt_1.KontaktPage, projekte_1.ProjektePage, team_1.TeamPage, facebook_service_1.FacebookService])
    ], FacebookPage);
    return FacebookPage;
}());
exports.FacebookPage = FacebookPage;
