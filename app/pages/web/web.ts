import { Component } from '@angular/core';
import { Nav } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

import { KontaktPage } from '../../pages/kontakt/kontakt';
import { ProjektePage } from '../../pages/projekte/projekte';
import { TeamPage } from '../../pages/team/team';

@Component({
    templateUrl: 'build/pages/web/web.html',
    providers: [KontaktPage, ProjektePage, TeamPage]
})

export class WebPage {

    nav_title = 'Web';
    title = "Webentwicklung";

    constructor(
        private nav: Nav,
        private global: GlobalVars,
        private kontaktPage: KontaktPage,
        private projektePage: ProjektePage,
        private teamPage: TeamPage
    ) {

    }

    public openPage() {
        // with BACK-Button
        this.nav.push(WebPage);
        // with MENU-Button
        //this.nav.setRoot(WebPage);
    }
}
