import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { SupabaseService } from '../services/supabase.service';

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

export class Tab5Page {

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async logout() {

    await this.supabaseService.logout();

    this.router.navigateByUrl('/login');
  }
}