import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../../services/photo';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.html',
  styleUrls: ['./category.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class CategoryComponent implements OnInit {
  photos: Photo[] = [];
  category: string = '';

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
      this.loadPhotos();
    });
  }

  loadPhotos() {
    this.photoService.getPhotosByCategory(this.category).subscribe(photos => {
      this.photos = photos;
    });
  }

  openFullscreen(img: HTMLImageElement) {
    if (img.requestFullscreen) {
      img.requestFullscreen();
    }
  }

  getCategoryEmoji(category: string): string {
    const emojis: { [key: string]: string } = {
      'nature': '🌿',
      'architecture': '🏛️',
      'portraits': '👤',
      'travel': '✈️'
    };
    return emojis[category] || '📸';
  }
}
