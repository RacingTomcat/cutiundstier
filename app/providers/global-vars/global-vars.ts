import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  
  public logo: string;

  constructor() {
    this.logo = 'images/logo.png';
  }

}
