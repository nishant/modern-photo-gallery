import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery';
import { CategoryComponent } from './components/category/category';
import { AllPhotosComponent } from './components/all-photos/all-photos';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'all-photos', component: AllPhotosComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: '**', redirectTo: '' }
];
