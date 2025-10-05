import { Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery';
import { CategoryComponent } from './components/category/category';

export const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'category/:category', component: CategoryComponent },
  { path: '**', redirectTo: '' }
];
