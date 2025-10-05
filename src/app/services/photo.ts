import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private categories = ['nature', 'architecture', 'portraits', 'travel'];

  private photos: Photo[] = [
    // Nature Photos
    { id: 1, category: 'nature', url: 'assets/images/nature/sample1.jpg', title: 'Forest Path', description: 'Sunlight filtering through dense forest canopy' },
    { id: 2, category: 'nature', url: 'assets/images/nature/sample2.jpg', title: 'Mountain Lake', description: 'Serene mountain landscape with crystal clear waters' },

    // Architecture Photos
    { id: 3, category: 'architecture', url: 'assets/images/architecture/sample1.jpg', title: 'Modern Building', description: 'Contemporary architecture with clean lines' },
    { id: 4, category: 'architecture', url: 'assets/images/architecture/sample2.jpg', title: 'Classic Design', description: 'Timeless architectural elegance' },

    // Portrait Photos
    { id: 5, category: 'portraits', url: 'assets/images/portraits/sample1.jpg', title: 'Natural Light Portrait', description: 'Candid moment in soft lighting' },
    { id: 6, category: 'portraits', url: 'assets/images/portraits/sample2.jpg', title: 'Urban Portrait', description: 'Street style photography with natural expressions' },

    // Travel Photos
    { id: 7, category: 'travel', url: 'assets/images/travel/sample1.jpg', title: 'Mountain Adventure', description: 'Epic landscape from a distant journey' },
    { id: 8, category: 'travel', url: 'assets/images/travel/sample2.jpg', title: 'Autumn Journey', description: 'Fall colors painting the countryside' }
  ];

  constructor() { }

  getCategories(): Observable<string[]> {
    return of(this.categories);
  }

  getPhotosByCategory(category: string): Observable<Photo[]> {
    return of(this.photos.filter(photo => photo.category === category));
  }

  getAllPhotos(): Observable<Photo[]> {
    return of(this.photos);
  }

  getPhotoById(id: number): Observable<Photo | undefined> {
    return of(this.photos.find(photo => photo.id === id));
  }
}
