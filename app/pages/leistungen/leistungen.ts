import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/leistungen/leistungen.html'
})

export class LeistungenPage {

    nav_title = 'Leistungen';
    title = 'Leistungen';

    constructor(private navController: NavController, private global: GlobalVars) {
    }

}
