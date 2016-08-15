import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/app/app.html'
})

export class AppPage {

    title = 'App';

    constructor(private navController: NavController) {
    }

}
