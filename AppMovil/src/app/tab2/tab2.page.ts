import { Component } from '@angular/core';
// CHANGE: Import the PhotoService
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // CHANGE: Update constructor to include `photoService`
  constructor(public photoService: PhotoService) {}

  // CHANGE: Add `addNewToGallery()` method
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}