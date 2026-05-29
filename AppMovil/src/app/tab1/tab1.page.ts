import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class Tab1Page implements OnInit {

  qrCodeUrl = '';
  apkUrl = 'https://github.com/Odaliz2105/Examen_Encuesta_OBalseca.git';

  ngOnInit() {
    this.generarQR();
  }

  async generarQR() {
    try {
      this.qrCodeUrl = await QRCode.toDataURL(this.apkUrl, {
        width: 200,
        margin: 2,
        color: {
          dark: '#7b2cbf',
          light: '#16163a'
        }
      });
    } catch (err) {
      console.error('Error generando QR', err);
    }
  }
}