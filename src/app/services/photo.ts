import { Injectable } from '@angular/core';
import { Photo } from '../models/photo.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private categories = ['nature', 'architecture', 'portraits', 'travel', 'wildlife', 'abstract', 'cityscape', 'food'];

  private photos: Photo[] = [
    // Nature Photos
    { id: 1, category: 'nature', url: 'assets/images/nature/sample1.jpg', title: 'Forest Path', description: 'Sunlight filtering through dense forest canopy' },
    { id: 2, category: 'nature', url: 'assets/images/nature/sample2.jpg', title: 'Mountain Lake', description: 'Serene mountain landscape with crystal clear waters' },
    { id: 3, category: 'nature', url: 'assets/images/nature/sample3.jpg', title: 'Autumn Forest', description: 'Vibrant fall colors in a peaceful woodland' },
    { id: 4, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Desert Sunset', description: 'Golden hour in the vast desert landscape' },
    { id: 5, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Ocean Waves', description: 'Powerful ocean waves crashing against the shore' },
    { id: 6, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Spring Blooms', description: 'Colorful wildflowers in a meadow' },
    { id: 7, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Snowy Peak', description: 'Majestic snow-covered mountain peak at dawn' },
    { id: 8, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Tropical Paradise', description: 'Lush tropical vegetation near a waterfall' },
    { id: 9, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Rocky Shore', description: 'Dramatic rocky coastline with crashing waves' },
    { id: 10, category: 'nature', url: 'assets/images/nature/testimage.jpg', title: 'Misty Valley', description: 'Morning fog settling in a tranquil valley' },

    // Architecture Photos
    { id: 11, category: 'architecture', url: 'assets/images/architecture/sample1.jpg', title: 'Modern Building', description: 'Contemporary architecture with clean lines' },
    { id: 12, category: 'architecture', url: 'assets/images/architecture/sample2.jpg', title: 'Classic Design', description: 'Timeless architectural elegance' },
    { id: 13, category: 'architecture', url: 'assets/images/architecture/sample3.jpg', title: 'Urban Skyscraper', description: 'Towering glass and steel structure' },
    { id: 14, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Historic Cathedral', description: 'Gothic masterpiece with intricate details' },
    { id: 15, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Minimalist Interior', description: 'Clean lines and open spaces define this interior' },
    { id: 16, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Bridge Design', description: 'Engineering marvel spanning a river' },
    { id: 17, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Futuristic Complex', description: 'Forward-thinking design pushing boundaries' },
    { id: 18, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Ancient Ruins', description: 'Remains of an ancient civilization' },
    { id: 19, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Geometric Facade', description: 'Building exterior with fascinating geometric patterns' },
    { id: 20, category: 'architecture', url: 'assets/images/architecture/testimage.jpg', title: 'Industrial Conversion', description: 'Former factory repurposed into modern spaces' },

    // Portrait Photos
    { id: 21, category: 'portraits', url: 'assets/images/portraits/sample1.jpg', title: 'Natural Light Portrait', description: 'Candid moment in soft lighting' },
    { id: 22, category: 'portraits', url: 'assets/images/portraits/sample2.jpg', title: 'Urban Portrait', description: 'Street style photography with natural expressions' },
    { id: 23, category: 'portraits', url: 'assets/images/portraits/sample3.jpg', title: 'Dramatic Headshot', description: 'Studio portrait with dramatic lighting' },
    { id: 24, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Environmental Portrait', description: 'Subject captured in their natural environment' },
    { id: 25, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Vintage Style', description: 'Portrait with classic film-inspired aesthetics' },
    { id: 26, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Expressive Pose', description: 'Capture of genuine emotion and character' },
    { id: 27, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Black and White', description: 'Timeless monochrome portrait' },
    { id: 28, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Golden Hour', description: 'Portrait taken during the magical golden hour' },
    { id: 29, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Lifestyle Portrait', description: 'Casual moment capturing everyday life' },
    { id: 30, category: 'portraits', url: 'assets/images/portraits/testimage.jpg', title: 'Professional Headshot', description: 'Polished portrait with professional lighting' },

    // Travel Photos
    { id: 31, category: 'travel', url: 'assets/images/travel/sample1.jpg', title: 'Mountain Adventure', description: 'Epic landscape from a distant journey' },
    { id: 32, category: 'travel', url: 'assets/images/travel/sample2.jpg', title: 'Autumn Journey', description: 'Fall colors painting the countryside' },
    { id: 33, category: 'travel', url: 'assets/images/travel/sample3.jpg', title: 'Venice Canals', description: 'Historic waterways of the famous Italian city' },
    { id: 34, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Desert Expedition', description: 'Journey through vast sand dunes' },
    { id: 35, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Island Paradise', description: 'Tropical getaway with pristine beaches' },
    { id: 36, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Cultural Festival', description: 'Local celebration with traditional costumes' },
    { id: 37, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Historic Ruins', description: 'Ancient structure from a bygone civilization' },
    { id: 38, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Mountain Village', description: 'Quaint settlement nestled in alpine surroundings' },
    { id: 39, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Coastal Highway', description: 'Scenic road trip along dramatic coastline' },
    { id: 40, category: 'travel', url: 'assets/images/travel/testimage.jpg', title: 'Market Street', description: 'Vibrant local marketplace full of colors and life' },

    // Wildlife Photos (New Category - all valid images)
    { id: 41, category: 'wildlife', url: 'assets/images/wildlife/sample1.jpg', title: 'Majestic Eagle', description: 'Bird of prey in its natural habitat' },
    { id: 42, category: 'wildlife', url: 'assets/images/wildlife/sample2.jpg', title: 'Lion Pride', description: 'Family of lions resting in the savanna' },
    { id: 43, category: 'wildlife', url: 'assets/images/wildlife/sample3.jpg', title: 'Grazing Deer', description: 'Deer foraging in a peaceful meadow' },
    { id: 44, category: 'wildlife', url: 'assets/images/wildlife/sample4.jpg', title: 'Playful Dolphins', description: 'Marine mammals frolicking in the ocean' },
    { id: 45, category: 'wildlife', url: 'assets/images/wildlife/sample5.jpg', title: 'Forest Fox', description: 'Red fox hunting in the wilderness' },
    { id: 46, category: 'wildlife', url: 'assets/images/wildlife/sample6.jpg', title: 'Colorful Macaw', description: 'Vibrant tropical bird perched on a branch' },
    { id: 47, category: 'wildlife', url: 'assets/images/wildlife/sample7.jpg', title: 'Polar Bear', description: 'Arctic predator navigating the ice floes' },
    { id: 48, category: 'wildlife', url: 'assets/images/wildlife/sample8.jpg', title: 'Graceful Giraffe', description: 'Tall creature browsing treetops in Africa' },
    { id: 49, category: 'wildlife', url: 'assets/images/wildlife/sample9.jpg', title: 'Butterfly Collection', description: 'Diverse species showcasing natural patterns' },
    { id: 50, category: 'wildlife', url: 'assets/images/wildlife/sample10.jpg', title: 'Hunting Owl', description: 'Night predator on the prowl' },

    // Abstract Photos (New Category - all valid images)
    { id: 51, category: 'abstract', url: 'assets/images/abstract/sample1.jpg', title: 'Geometric Patterns', description: 'Intersecting lines and shapes creating visual harmony' },
    { id: 52, category: 'abstract', url: 'assets/images/abstract/sample2.jpg', title: 'Light Study', description: 'Experiment with light, shadow, and form' },
    { id: 53, category: 'abstract', url: 'assets/images/abstract/sample3.jpg', title: 'Color Explosion', description: 'Vibrant palette of intermingling hues' },
    { id: 54, category: 'abstract', url: 'assets/images/abstract/sample4.jpg', title: 'Fluid Motion', description: 'Capturing the essence of movement in still form' },
    { id: 55, category: 'abstract', url: 'assets/images/abstract/sample5.jpg', title: 'Reflective Surfaces', description: 'Distortions and mirrors creating new realities' },
    { id: 56, category: 'abstract', url: 'assets/images/abstract/sample6.jpg', title: 'Macro Universe', description: 'Small details transformed into cosmic landscapes' },
    { id: 57, category: 'abstract', url: 'assets/images/abstract/sample7.jpg', title: 'Digital Manipulation', description: 'Technology-enhanced artistic expression' },
    { id: 58, category: 'abstract', url: 'assets/images/abstract/sample8.jpg', title: 'Minimalist Composition', description: 'Beauty in simplicity and negative space' },
    { id: 59, category: 'abstract', url: 'assets/images/abstract/sample9.jpg', title: 'Textured Layers', description: 'Rich surfaces inviting tactile imagination' },
    { id: 60, category: 'abstract', url: 'assets/images/abstract/sample10.jpg', title: 'Urban Abstraction', description: 'City elements transformed into artistic patterns' },

    // Cityscape Photos (New Category - all valid images)
    { id: 61, category: 'cityscape', url: 'assets/images/cityscape/sample1.jpg', title: 'Downtown Panorama', description: 'Sweeping view of urban skyline' },
    { id: 62, category: 'cityscape', url: 'assets/images/cityscape/sample2.jpg', title: 'Night Lights', description: 'City illuminated after dark' },
    { id: 63, category: 'cityscape', url: 'assets/images/cityscape/sample3.jpg', title: 'Morning Commute', description: 'Urban life during rush hour' },
    { id: 64, category: 'cityscape', url: 'assets/images/cityscape/sample4.jpg', title: 'Historic District', description: 'Well-preserved architectural heritage' },
    { id: 65, category: 'cityscape', url: 'assets/images/cityscape/sample5.jpg', title: 'Urban Waterfront', description: 'Where city meets water in harmony' },
    { id: 66, category: 'cityscape', url: 'assets/images/cityscape/sample6.jpg', title: 'Skyscraper Canyon', description: 'Looking up at towering urban structures' },
    { id: 67, category: 'cityscape', url: 'assets/images/cityscape/sample7.jpg', title: 'City Park Oasis', description: 'Green space amid urban development' },
    { id: 68, category: 'cityscape', url: 'assets/images/cityscape/sample8.jpg', title: 'Metropolitan Transit', description: 'Public transportation systems in motion' },
    { id: 69, category: 'cityscape', url: 'assets/images/cityscape/sample9.jpg', title: 'Rainy Street', description: 'Urban setting with reflections after rainfall' },
    { id: 70, category: 'cityscape', url: 'assets/images/cityscape/sample10.jpg', title: 'City Aerial', description: 'Bird\'s eye view of urban planning and development' },

    // Food Photos (New Category - all valid images)
    { id: 71, category: 'food', url: 'assets/images/food/sample1.jpg', title: 'Gourmet Plating', description: 'Artfully presented fine dining creation' },
    { id: 72, category: 'food', url: 'assets/images/food/sample2.jpg', title: 'Fresh Harvest', description: 'Vibrant produce from local farmers' },
    { id: 73, category: 'food', url: 'assets/images/food/sample3.jpg', title: 'Dessert Delight', description: 'Sweet creation showcasing pastry craftsmanship' },
    { id: 74, category: 'food', url: 'assets/images/food/sample4.jpg', title: 'Street Food', description: 'Authentic local cuisine from around the world' },
    { id: 75, category: 'food', url: 'assets/images/food/sample5.jpg', title: 'Coffee Art', description: 'Barista-created latte designs' },
    { id: 76, category: 'food', url: 'assets/images/food/sample6.jpg', title: 'Comfort Food', description: 'Homestyle cooking that warms the soul' },
    { id: 77, category: 'food', url: 'assets/images/food/sample7.jpg', title: 'Sushi Platter', description: 'Japanese cuisine arranged with precision' },
    { id: 78, category: 'food', url: 'assets/images/food/sample8.jpg', title: 'Spice Collection', description: 'Colorful array of culinary seasonings' },
    { id: 79, category: 'food', url: 'assets/images/food/sample9.jpg', title: 'Artisan Bread', description: 'Hand-crafted sourdough with perfect crust' },
    { id: 80, category: 'food', url: 'assets/images/food/sample10.jpg', title: 'Seasonal Cocktail', description: 'Handcrafted beverage with fresh ingredients' }
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
