import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonicModule
  ]
})

export class Tab4Page implements OnInit {

  encuestas: any[] = [];
  apiExpanded: boolean[] = [];

  constructor(
    private supabaseService: SupabaseService
  ) {}

  ngOnInit() {

    this.cargarEncuestas();

  }

  toggleApi(index: number) {
    this.apiExpanded[index] = !this.apiExpanded[index];
  }

  async cargarEncuestas() {

    const { data, error } =
      await this.supabaseService.obtenerEncuestas();

    if (error) {

      console.log(error);

      alert('Error cargando registros');

      return;

    }

    this.encuestas = data || [];

  }

}