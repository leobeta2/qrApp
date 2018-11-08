export class ScanData{
  info:string;
  tipo:string;
  lat: any;
  long:any;

  constructor(texto:string){
    this.tipo="No definido";
    this.info = texto;
    this.lat = null;
    this.long = null;

    if(texto.startsWith("http")){
      this.tipo = "http"
    }else if (texto.startsWith("geo")) {
        this.tipo="mapa";
    }else if(texto.startsWith("BEGIN:VCARD")){
      this.tipo = "contacto";
    }

  }
}
