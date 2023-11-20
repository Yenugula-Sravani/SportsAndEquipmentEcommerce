import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincarouselComponent } from './maincarousel.component';

describe('MaincarouselComponent', () => {
  let component: MaincarouselComponent;
  let fixture: ComponentFixture<MaincarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaincarouselComponent]
    });
    fixture = TestBed.createComponent(MaincarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
