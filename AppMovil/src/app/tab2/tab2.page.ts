import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit {

  evidencias: any[] = [];
  cargando = true;

  constructor(
    private supabaseService: SupabaseService
  ) {}

  ngOnInit() {
    this.cargarEvidencias();
  }

  async cargarEvidencias() {
    this.cargando = true;
    const { data, error } = await this.supabaseService.obtenerEncuestas();
    if (!error && data) {
      this.evidencias = data.filter((e: any) => e.imagen);
    }
    this.cargando = false;
  }
}