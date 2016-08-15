import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/projekte/projekte.html'
})

export class ProjektePage {

    title = 'Projekte';

    constructor(private navController: NavController) {
    }

}
