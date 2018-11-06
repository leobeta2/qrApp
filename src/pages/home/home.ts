import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  resultado:any;
  opciones:any;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              private barcodeScanner: BarcodeScanner,
              private platform: Platform,
              private historialProvider: HistorialProvider) {

              this.opciones ={
                //formats:'AZTEC'
                formats: 'QR_CODE'
              };


  }

  scan(){
    console.log('Realizando Escaneo');

    if (!this.platform.is('cordova')) {
      this.historialProvider.agregar_historial("http://google.com")
      return;
    }

    this.barcodeScanner.scan(this.opciones).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.resultado = barcodeData;

      if(barcodeData.cancelled == false && barcodeData.text!=null){
        this.historialProvider.agregar_historial(barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         this.resultado = err;
     }
   );
     this.mensajeData(this.resultado);
  }

  mensajeData(result) {
    alert("Data del Scan\n" + result+
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
 }

}
