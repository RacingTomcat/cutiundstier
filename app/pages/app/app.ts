import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

import { KontaktPage } from '../../pages/kontakt/kontakt';
import { ProjektePage } from '../../pages/projekte/projekte';
import { TeamPage } from '../../pages/team/team';

@Component({
    templateUrl: 'build/pages/app/app.html',
    providers: [KontaktPage, ProjektePage, TeamPage]
})

export class AppPage {

    nav_title = 'App';
    title = "Appentwicklung";

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        private kontaktPage: KontaktPage,
        private projektePage: ProjektePage,
        private teamPage: TeamPage
    ) {
    }

    public openPage() {
        // with BACK-Button
        this.navController.push(AppPage);
        // with MENU-Button
        //this.navController.setRoot(AppPage);
    }

}
