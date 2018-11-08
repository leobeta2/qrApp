import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation';

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
              private historialProvider: HistorialProvider,
              private geolocation: Geolocation) {

              this.opciones ={
                //formats:'AZTEC'
                formats: 'QR_CODE'
              };


  }

  scan(){
    console.log('Realizando Escaneo');

    if (!this.platform.is('cordova')) {
      //this.historialProvider.agregar_historial("http://google.com");
      //this.historialProvider.agregar_historial("geo:9.9976133046533260,-84.006774790335323");
      this.historialProvider.agregar_historial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      return;
    }

    this.barcodeScanner.scan(this.opciones).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.resultado = barcodeData;

      if(barcodeData.cancelled == false && barcodeData.text!=null){
        this.historialProvider.agregar_historial(barcodeData.text);
      }

      this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
      alert("Datos de latitud y longitud: "+"\n"+
           resp.coords.latitude + " y "+ resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

     }).catch(err => {
         console.log('Error', err);
         this.resultado = err;
     }
   );
     this.mensajeData(this.resultado);
     this.ubicacion();
  }

  mensajeData(result) {
    alert("Data del Scan\n" + result+
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
 }

 ubicacion(){


  }
}
