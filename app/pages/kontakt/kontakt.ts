import { Component, ElementRef, ViewChild } from "@angular/core";
import { NavController } from "ionic-angular";

import { GlobalVars } from "../../providers/global-vars/global-vars";

declare var google: any;

@Component({
    templateUrl: 'build/pages/kontakt/kontakt.html'
})

export class KontaktPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    apiKey: string = 'AIzaSyDDmnTcSPl9jpdxeCNumaegSxPEIbKg4gs';

    nav_title = "Kontakt";
    title = "Kontakt";

    constructor(
        private navController: NavController,
        private global: GlobalVars
    ) {
        
    }

    ionViewLoaded() {
    }

    ionViewDidEnter() {
        this.loadMap();
    }

    public openPage() {
        // with BACK-Button
        this.navController.push(KontaktPage);
        // with MENU-Button
        // this.navController.setRoot(KontaktPage);
    }

    loadMap() {

        let latLng = new google.maps.LatLng(50.989113, 7.123045);

        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        this.addMarker();
    }

    addMarker() {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: this.map.getCenter()
        });

        let content = "<a href=\"http://www.cutiundstier.de/kontakt\">cuti und stier - Internetagentur</a>";

        this.addInfoWindow(marker, content);
        
    }

    addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        });

    }

}

