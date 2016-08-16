import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  
  public logo: string;
  public logo_web: string;
  public logo_app: string;
  public logo_leistungen: string;
  public logo_projekte: string;
  public logo_team: string;
  public logo_kontakt: string;

  constructor() {
    this.logo = 'images/logo.png';
    this.logo_web = 'images/Icon_Webentwicklung.png';
    this.logo_app = 'images/Icon_Appentwicklung.png';
    this.logo_leistungen = 'images/Icon_Leistungen.png';
    this.logo_projekte = 'images/Icon_Projekte.png';
    this.logo_team = 'images/Icon_Team.png';
    this.logo_kontakt = 'images/Icon_Kontakt.png';
  }

}
