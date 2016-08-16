import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalVars } from '../../providers/global-vars/global-vars';

@Component({
  templateUrl: 'build/pages/web/web.html'
})

export class WebPage {

    nav_title = 'Web';
    title = "Webentwicklung";

    constructor(private navController: NavController, private global: GlobalVars) {
    }

}
