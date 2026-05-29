import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Geolocation } from '@capacitor/geolocation';
import { SupabaseService } from '../services/supabase.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})

export class Tab3Page {

  alias = '';
  edad = '';
  rol = '';
  videojuego = '';
  plataforma = '';
  genero = '';
  comentario = '';
  lugar = '';

  latitud: number = 0;
  longitud: number = 0;
  juegoApi: any;

  constructor(
    public photoService: PhotoService,
    private supabaseService: SupabaseService,
    private gameService: GameService
  ) {}

  abrirCamara() {
    this.photoService.addNewToGallery();
  }

  seleccionarDeGaleria(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.photoService.photos = [{
        filepath: file.name,
        webviewPath: e.target.result,
        data: e.target.result
      }];
    };
    reader.readAsDataURL(file);
  }

  async obtenerUbicacion() {
    try {
      let lat: number;
      let lng: number;

      try {
        const permisos = await Geolocation.requestPermissions();
        if (permisos.location !== 'granted') {
          alert('Permiso de ubicación denegado');
          return;
        }
        const pos = await Geolocation.getCurrentPosition();
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;

      } catch {
        const pos = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 10000
          });
        });
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
      }

      this.latitud = lat;
      this.longitud = lng;
      alert('Ubicación obtenida correctamente');

    } catch (error) {
      console.log(error);
      alert('Error obteniendo GPS. Asegúrate de tener los servicios de ubicación activados.');
    }
  }
  buscarJuego() {

  if (!this.videojuego) {

    alert('Ingrese un videojuego');
    return;

  }

  // LIMPIAR RESULTADO ANTERIOR
  this.juegoApi = null;

  this.gameService
    .buscarJuego(this.videojuego)
    .subscribe({

      next: (resp: any) => {

      
        console.log(resp);
        console.log(resp.map((j: any) => j.title));

        const juegoEncontrado = resp.find((juego: any) =>
          juego.title.toLowerCase()
            .includes(this.videojuego.toLowerCase())
        );

        if (juegoEncontrado) {

          this.juegoApi = juegoEncontrado;

        } else {

          alert('Juego no encontrado');

        }

      },

      error: (error) => {

        console.log(error);

        alert('Error consumiendo API');

      }

    });

}


  async guardarEncuesta() {

    try {

      let imagen = this.photoService.photos[0]?.webviewPath || '';
      const fotoActual = this.photoService.photos[0];

      if (fotoActual?.data) {

        const nombreArchivo = `encuesta_${Date.now()}.jpeg`;
        const { url, error } = await this.supabaseService
          .subirEvidencia(fotoActual.data, nombreArchivo);

        if (!error && url) {

          imagen = url;

        }

      }

      const data = {

  alias: this.alias,
  edad: this.edad,
  rol: this.rol,

  videojuego: this.videojuego,

  plataforma: this.plataforma,
  genero: this.genero,

  comentario: this.comentario,
  lugar: this.lugar,

  latitud: this.latitud,
  longitud: this.longitud,

  fecha: new Date(),

  imagen,

  // DATOS API

  juego_nombre_api: this.juegoApi?.title || this.videojuego,

  juego_imagen: this.juegoApi?.thumbnail || '',

  juego_genero_api: this.juegoApi?.genre || '',

  juego_plataforma_api: this.juegoApi?.platform || '',

  juego_descripcion_api: this.juegoApi?.short_description || '',

  juego_url_api: this.juegoApi?.game_url || ''

};

      const { error } = await this.supabaseService
        .guardarEncuesta(data);

      if (error) {

        console.log(error);

        alert('Error guardando encuesta');

        return;

      }

      alert('Encuesta guardada correctamente');

      // LIMPIAR FORMULARIO

      this.alias = '';
      this.edad = '';
      this.rol = '';
      this.videojuego = '';
      this.plataforma = '';
      this.genero = '';
      this.comentario = '';
      this.lugar = '';

      this.latitud = 0;
      this.longitud = 0;
      this.juegoApi = null;

      this.photoService.photos = [];

    } catch (error) {

      console.log(error);

      alert('Error general');

    }

  }

}