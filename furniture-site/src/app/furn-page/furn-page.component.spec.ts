import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnPageComponent } from './furn-page.component';

describe('FurnPageComponent', () => {
  let component: FurnPageComponent;
  let fixture: ComponentFixture<FurnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
