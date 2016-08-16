import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/web/web.html'
})

export class WebPage {

    title = 'Web';
    icon = 'Web';

    constructor(private navController: NavController) {
    }

}
