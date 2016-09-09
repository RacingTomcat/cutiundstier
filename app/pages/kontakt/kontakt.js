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
var global_vars_1 = require("../../providers/global-vars/global-vars");
var KontaktPage = (function () {
    function KontaktPage(navController, global) {
        this.navController = navController;
        this.global = global;
        this.apiKey = 'AIzaSyDDmnTcSPl9jpdxeCNumaegSxPEIbKg4gs';
        this.nav_title = "Kontakt";
        this.title = "Kontakt";
    }
    KontaktPage.prototype.ionViewLoaded = function () {
        this.loadMap();
    };
    KontaktPage.prototype.openPage = function () {
        // with BACK-Button
        this.navController.push(KontaktPage);
        // with MENU-Button
        // this.navController.setRoot(KOntaktPage);
    };
    KontaktPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(50.989113, 7.123045);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.addMarker();
    };
    KontaktPage.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });
        var content = "<a href=\"http://www.cutiundstier.de/kontakt\">cuti und stier - Internetagentur</a>";
        this.addInfoWindow(marker, content);
    };
    KontaktPage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    __decorate([
        core_1.ViewChild('map'), 
        __metadata('design:type', core_1.ElementRef)
    ], KontaktPage.prototype, "mapElement", void 0);
    KontaktPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/kontakt/kontakt.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, global_vars_1.GlobalVars])
    ], KontaktPage);
    return KontaktPage;
}());
exports.KontaktPage = KontaktPage;
