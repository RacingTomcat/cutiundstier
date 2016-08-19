import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

import { AppPage } from '../../pages/app/app';
import { KontaktPage } from '../../pages/kontakt/kontakt';
import { LeistungenPage } from '../../pages/leistungen/leistungen';
import { ProjektePage } from '../../pages/projekte/projekte';
import { TeamPage } from '../../pages/team/team';
import { WebPage } from '../../pages/web/web';

@Component({
    templateUrl: 'build/pages/startseite/startseite.html',
    providers: [WebPage, AppPage, LeistungenPage]
})

export class StartPage {

    nav_title = 'Startseite';
    title = 'cuti und stier - Internetagentur';

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        private webPage: WebPage,
        private appPage: AppPage,
        private leistungenPage: LeistungenPage
    ) {

    }

}
