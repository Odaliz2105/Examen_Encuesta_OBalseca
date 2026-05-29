import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent
} from '@ionic/angular/standalone';

import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent
  ]
})
export class RegisterPage {

  email = '';
  password = '';

  constructor(
    private authService: SupabaseService,
    private router: Router
  ) {}

  async register() {

    const { error } = await this.authService.register(
      this.email,
      this.password
    );

    if (error) {
      alert(error.message);
      return;
    }

    alert('Usuario registrado');

    this.router.navigate(['/login']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}