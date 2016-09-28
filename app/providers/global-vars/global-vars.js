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
var GlobalVars = (function () {
    function GlobalVars() {
        this.logo = 'images/logo.png';
        this.logo_web = 'images/Icon_Webentwicklung.png';
        this.logo_app = 'images/Icon_Appentwicklung.png';
        this.logo_leistungen = 'images/Icon_Leistungen.png';
        this.logo_projekte = 'images/Icon_Projekte.png';
        this.logo_team = 'images/Icon_Team.png';
        this.logo_kontakt = 'images/Icon_Kontakt.png';
        this.logo_facebook = 'images/Icon_Facebook.png';
    }
    GlobalVars = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GlobalVars);
    return GlobalVars;
}());
exports.GlobalVars = GlobalVars;
