import { Injectable } from '@angular/core';

import {ScanData} from "../../models/scan-data.model";
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialProvider {

  private historial:ScanData[] =[];
  constructor(private iab: InAppBrowser) {

  }

  abrir_scan(index:number){
    let ScanData = this.historial[index];
    console.log(ScanData);

    switch(ScanData.tipo){
      case "http":
        this.iab.create(ScanData.info, "_system")
      break
      default:
        console.error("Tipo no soportado")
    }
  }

  agregar_historial(texto: string){
    let data = new ScanData(texto);

    this.historial.unshift(data); //lo ingresa de forma decendente
    console.log(this.historial);
    this.abrir_scan(0); //ya que la primera posicion es la mas reciente
  }

  cargar_historial(){
    return this.historial;
  }

}
