import { Component } from '@angular/core';

import {HistorialProvider} from "../../providers/historial/historial";




@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  constructor(private historialProvider: HistorialProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuardadosPage');
  }

}
