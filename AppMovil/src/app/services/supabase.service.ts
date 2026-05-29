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

  async subirEvidencia(base64Data: string, fileName: string) {

    const cleanBase64 = base64Data.includes(',')
      ? base64Data.split(',')[1]
      : base64Data;

    const byteCharacters = atob(cleanBase64);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {

      byteNumbers[i] = byteCharacters.charCodeAt(i);

    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/jpeg' });

    const { data, error } = await this.supabase
      .storage
      .from('evidencias')
      .upload(fileName, blob, {
        contentType: 'image/jpeg',
        upsert: true
      });

    if (error) {

      return { url: '', error };

    }

    const { data: publicUrl } = this.supabase
      .storage
      .from('evidencias')
      .getPublicUrl(data.path);

    return {
      url: publicUrl.publicUrl,
      error: null
    };

  }

  // GET SURVEYS

  obtenerEncuestas() {

  return this.supabase
    .from('surveys')
    .select('*')
    .order('fecha', { ascending: false });
  
  }

}