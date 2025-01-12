import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringinterpolationComponent } from './stringinterpolation.component';

describe('StringinterpolationComponent', () => {
  let component: StringinterpolationComponent;
  let fixture: ComponentFixture<StringinterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringinterpolationComponent]
    });
    fixture = TestBed.createComponent(StringinterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
