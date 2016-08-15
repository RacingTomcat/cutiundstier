import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/startseite/startseite.html'
})

export class StartPage {

    title = 'Herzlich Willkommen';

    constructor(private navController: NavController) {
    }

}
