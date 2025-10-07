import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullscreenGallery } from './fullscreen-gallery';

describe('FullscreenGallery', () => {
  let component: FullscreenGallery;
  let fixture: ComponentFixture<FullscreenGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullscreenGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullscreenGallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
