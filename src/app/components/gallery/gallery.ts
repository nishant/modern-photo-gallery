import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PhotoService } from '../../services/photo';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.photoService.getAllPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

  navigateToCategory(category: string): void {
    this.router.navigate(['/category', category]);
  }
}
