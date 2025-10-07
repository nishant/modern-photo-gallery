import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Photo } from '../../models/photo.model';
import { PhotoService } from '../../services/photo';
import { FullscreenGalleryComponent } from '../fullscreen-gallery/fullscreen-gallery';

@Component({
  selector: 'app-all-photos',
  standalone: true,
  imports: [CommonModule, RouterModule, FullscreenGalleryComponent],
  templateUrl: './all-photos.html',
  styleUrls: ['./all-photos.scss']
})
export class AllPhotosComponent implements OnInit {
  photos: Photo[] = [];
  selectedPhotoIndex: number = 0;
  showLightbox: boolean = false;
  loading: boolean = true;
  error: string | null = null;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    console.log('AllPhotosComponent initialized');
    this.loadAllPhotos();
  }

  loadAllPhotos(): void {
    this.loading = true;
    this.photoService.getAllPhotos().subscribe({
      next: (photos) => {
        console.log('Photos loaded:', photos);
        this.photos = photos;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading photos:', err);
        this.error = 'Failed to load photos';
        this.loading = false;
      }
    });
  }

  openLightbox(index: number): void {
    this.selectedPhotoIndex = index;
    this.showLightbox = true;
  }

  closeLightbox(): void {
    this.showLightbox = false;
  }
}
