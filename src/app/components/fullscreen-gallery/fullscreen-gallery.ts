import { Component, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-fullscreen-gallery',
  templateUrl: './fullscreen-gallery.html',
  styleUrls: ['./fullscreen-gallery.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FullscreenGalleryComponent {
  @Input() photos: Photo[] = [];
  @Input() currentIndex: number = 0;
  @Output() close = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.close.emit();
  }

  @HostListener('document:keydown.arrowleft')
  onLeftArrow() {
    this.prevPhoto();
  }

  @HostListener('document:keydown.arrowright')
  onRightArrow() {
    this.nextPhoto();
  }

  prevPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Loop to the last image when at the first image
      this.currentIndex = this.photos.length - 1;
    }
  }

  nextPhoto() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    } else {
      // Loop to the first image when at the last image
      this.currentIndex = 0;
    }
  }

  closeLightbox() {
    this.close.emit();
  }
}
