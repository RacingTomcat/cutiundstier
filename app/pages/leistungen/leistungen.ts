import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/leistungen/leistungen.html'
})

export class LeistungenPage {

    title = 'Leistungen';

    constructor(private navController: NavController) {
    }

}
