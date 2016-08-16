import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/startseite/startseite.html'
})

export class StartPage {

  nav_title = 'Startseite';
  title = 'cuti und stier - Internetagentur';

  constructor(private navController: NavController, private global: GlobalVars) {

  }

}
