import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/projekte/projekte.html'
})

export class ProjektePage {

    nav_title = 'Projekte';
    title = 'Projekte';

    constructor(private navController: NavController, private global: GlobalVars) {
    }

}
