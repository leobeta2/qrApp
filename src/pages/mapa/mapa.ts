import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {

  lat:number;
  lng:number;

  constructor(public navParams: NavParams,
              private viewController: ViewController) {
    this.lat = 9.9654342354325;
    this.lng = -84.006754326542;
    //para cortar el array, en donde hay una coma
    let coordsArray = this.navParams.get("coords").split(",");
    this.lat = Number(coordsArray[0].replace("geo:",""));
    this.lng = Number(coordsArray[1]);

    console.log(this.navParams.get("coords"))
    console.log(this.lat, this.lng);
  }

  cerrar_modal(){
    this.viewController.dismiss();
  }

}
