import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PhotoService } from '../../services/photo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbDropdownModule]
})
export class NavbarComponent implements OnInit {
  categories: string[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}
