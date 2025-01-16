import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FordirectiveComponent } from './fordirective.component';

describe('FordirectiveComponent', () => {
  let component: FordirectiveComponent;
  let fixture: ComponentFixture<FordirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FordirectiveComponent]
    });
    fixture = TestBed.createComponent(FordirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
