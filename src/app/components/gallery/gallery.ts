import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo';
import { Photo } from '../../models/photo.model';
import { FullscreenGalleryComponent } from '../fullscreen-gallery/fullscreen-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss'],
  standalone: true,
  imports: [CommonModule, FullscreenGalleryComponent]
})
export class GalleryComponent implements OnInit {
  categoryPreviews: { category: string, photo: Photo }[] = [];
  photos: Photo[] = [];
  showLightbox = false;
  selectedIndex = 0;

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get categories and the first photo from each
    this.photoService.getCategories().subscribe(categories => {
      categories.forEach(category => {
        this.photoService.getPhotosByCategory(category).subscribe(photos => {
          if (photos.length > 0) {
            this.categoryPreviews.push({
              category: category,
              photo: photos[0]
            });
            // Add to the photos array for lightbox functionality
            this.photos.push(photos[0]);
          }
        });
      });
    });
  }

  openLightbox(index: number): void {
    this.selectedIndex = index;
    this.showLightbox = true;
  }

  closeLightbox(): void {
    this.showLightbox = false;
  }

  navigateToCategory(category: string): void {
    this.router.navigate(['/category', category]);
  }
}
