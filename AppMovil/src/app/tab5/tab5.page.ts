import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { SupabaseService } from '../services/supabase.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,

  imports: [
    CommonModule,
    IonicModule
  ]
})

export class Tab5Page implements OnInit {

  encuestasCount = 0;
  fotosCount = 0;

  constructor(
    private supabaseService: SupabaseService,
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cargarStats();
  }

  async cargarStats() {
    const { data, error } = await this.supabaseService.obtenerEncuestas();
    if (!error && data) {
      this.encuestasCount = data.length;
    }
    this.fotosCount = this.photoService.photos.length;
  }

  async logout() {

    await this.supabaseService.logout();

    this.router.navigateByUrl('/login');
  }
}