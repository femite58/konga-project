import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsProductsComponent } from './spons-products.component';

describe('SponsProductsComponent', () => {
  let component: SponsProductsComponent;
  let fixture: ComponentFixture<SponsProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
