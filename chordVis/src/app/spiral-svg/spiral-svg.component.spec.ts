import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpiralSvgComponent } from './spiral-svg.component';

describe('SpiralSvgComponent', () => {
  let component: SpiralSvgComponent;
  let fixture: ComponentFixture<SpiralSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpiralSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpiralSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
