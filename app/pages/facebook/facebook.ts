import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import { FacebookService } from '../../providers/facebook-service/facebook-service';
import { GlobalVars } from "../../providers/global-vars/global-vars";

import { KontaktPage } from '../../pages/kontakt/kontakt';
import { ProjektePage } from '../../pages/projekte/projekte';
import { TeamPage } from '../../pages/team/team';

@Component({
    templateUrl: 'build/pages/facebook/facebook.html',
    providers: [FacebookService]
})

export class FacebookPage {

    nav_title = "Facebook";
    title = "Facebook-Feed";
    page_id: string = 'cutiundstier'; // YOUR_PAGE_ID_HERE
    public facebook_feed: any;

    constructor(
        private navController: NavController,
        private global: GlobalVars,
        public facebookService: FacebookService
    ) {

        this.loadFacebookFeed();

    }

    loadFacebookFeed() {
        this.facebookService.load()
            .then(data => {
                this.facebook_feed = data;
            });
    }

    show_more(id) {
        var content_div = document.getElementById(id);
        content_div.className = "expand";
        var content_button = document.getElementById(id + '_button');
        content_button.className = "expand_hide";
    }

    open_facebook(id) {
        var ids = id.split("_");
        var win = window.open("https://www.facebook.com/" + this.page_id + "/posts/" + ids[1], "_blank");
    }

    public openPage() {
        // with BACK-Button
        this.navController.push(FacebookPage);
        // with MENU-Button
        // this.navController.setRoot(KOntaktPage);
    }

}

