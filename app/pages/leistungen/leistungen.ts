import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

import { KontaktPage } from '../../pages/kontakt/kontakt';
import { ProjektePage } from '../../pages/projekte/projekte';
import { TeamPage } from '../../pages/team/team';

@Component({
    templateUrl: 'build/pages/leistungen/leistungen.html',
    providers: [KontaktPage, ProjektePage, TeamPage]
})

export class LeistungenPage {

    nav_title = 'Leistungen';
    title = 'Leistungen';

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
        this.navController.push(LeistungenPage);
        // with MENU-Button
        //this.navController.setRoot(LeistungenPage);
    }

}
