import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import bwipjs from '../../../node_modules/bwip-angular2';

/**
 * Generated class for the CodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-codigo',
  templateUrl: 'codigo.html',
})
export class CodigoPage {

  cadena: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    
    this.cadena = this.navParams.data;
  }

   ionViewDidLoad() {
    console.log('ionViewDidLoad CodigoPage');
    let cadena = this.cadena;
    console.log(cadena);

    let canvas = document.getElementById('barcodeCanvas');
    bwipjs(canvas, {
      bcid: 'azteccode',       // Barcode type
      text: '123456789',   	  // Text to encode
      scale: 3,                 // 3x scaling factor
      height: 25,               // Bar height, in millimeters
      width: 25,
      includetext: true,        // Show human-readable text
      textxalign: 'center',      // Always good to set this
    }, function (err, cvs) {
      if (err) {
        //document.getElementById('err').innerText = 'Error occured. See browser log for more information';
        console.log(err);
      } else {
      }
    });
  }
    
  
 


}
