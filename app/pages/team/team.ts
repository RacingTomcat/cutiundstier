import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/team/team.html'
})

export class TeamPage {

    nav_title = 'Team';
    title = 'Team';

    constructor(private navController: NavController, private global: GlobalVars) {
    }

}
