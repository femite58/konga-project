import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPriceRangeComponent } from './custom-price-range.component';

describe('CustomPriceRangeComponent', () => {
  let component: CustomPriceRangeComponent;
  let fixture: ComponentFixture<CustomPriceRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPriceRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPriceRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
