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
var TeamPage = (function () {
    function TeamPage(navController, global) {
        this.navController = navController;
        this.global = global;
        this.nav_title = 'Team';
        this.title = 'Team';
    }
    TeamPage.prototype.openPage = function () {
        // with BACK-Button
        this.navController.push(TeamPage);
        // with MENU-Button
        //this.navController.setRoot(TeamPage);
    };
    TeamPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/team/team.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars])
    ], TeamPage);
    return TeamPage;
}());
exports.TeamPage = TeamPage;
