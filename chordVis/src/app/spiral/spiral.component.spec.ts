import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralComponent } from './spiral.component';

describe('SpiralComponent', () => {
  let component: SpiralComponent;
  let fixture: ComponentFixture<SpiralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
