import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      (environment as any).supabaseUrl,
      (environment as any).supabaseKey
    );
  }

  // REGISTRO
  async register(email: string, password: string) {
    return await this.supabase.auth.signUp({
      email,
      password,
    });
  }

  // LOGIN
  async login(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  // LOGOUT
  async logout() {
    return await this.supabase.auth.signOut();
  }

  // USUARIO ACTUAL
  async getUser() {
    const {
      data: { user },
    } = await this.supabase.auth.getUser();

    return user;
  }
}