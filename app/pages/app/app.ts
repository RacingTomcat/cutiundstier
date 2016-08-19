import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/app/app.html'
})

export class AppPage {

    nav_title = 'App';
    title = "Appentwicklung";

    constructor(private navController: NavController, private global: GlobalVars) {
    }

    public openPage() {
        // with BACK-Button
        this.navController.push(AppPage);
        // with MENU-Button
        //this.navController.setRoot(AppPage);
    }

}
