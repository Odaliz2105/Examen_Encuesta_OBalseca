import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Geolocation } from '@capacitor/geolocation';
import { SupabaseService } from '../services/supabase.service';

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

  constructor(
    public photoService: PhotoService,
    private supabaseService: SupabaseService
  ) {}

  async obtenerUbicacion() {

    try {

      const permisos = await Geolocation.requestPermissions();

      if (permisos.location === 'granted') {

        const coordinates = await Geolocation.getCurrentPosition();

        this.latitud = coordinates.coords.latitude;

        this.longitud = coordinates.coords.longitude;

        alert('Ubicación obtenida correctamente');

      } else {

        alert('Permiso de ubicación denegado');

      }

    } catch (error) {

      console.log(error);

      alert('Error obteniendo GPS');

    }

  }

  async guardarEncuesta() {

    try {

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

        imagen: this.photoService.photos[0]?.webviewPath

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

    } catch (error) {

      console.log(error);

      alert('Error general');

    }

  }

}