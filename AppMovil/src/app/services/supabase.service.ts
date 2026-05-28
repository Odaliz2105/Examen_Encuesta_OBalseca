import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SupabaseService {

  private supabase: SupabaseClient;

  constructor() {

    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

  }

  // LOGIN

  login(email: string, password: string) {

    return this.supabase.auth.signInWithPassword({
      email,
      password
    });

  }

  // REGISTER

  register(email: string, password: string) {

    return this.supabase.auth.signUp({
      email,
      password
    });

  }

  // LOGOUT

  logout() {

    return this.supabase.auth.signOut();

  }

  // INSERT SURVEY

  guardarEncuesta(data: any) {

    return this.supabase
      .from('surveys')
      .insert([data]);

  }

  // GET SURVEYS

  obtenerEncuestas() {

    return this.supabase
      .from('surveys')
      .select('*')
      .order('fecha', { ascending: false });

  }

}