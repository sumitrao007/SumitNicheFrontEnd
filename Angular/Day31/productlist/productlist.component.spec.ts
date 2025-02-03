import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistComponent } from './productlist.component';

describe('ProductlistComponent', () => {
  let component: ProductlistComponent;
  let fixture: ComponentFixture<ProductlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductlistComponent]
    });
    fixture = TestBed.createComponent(ProductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
