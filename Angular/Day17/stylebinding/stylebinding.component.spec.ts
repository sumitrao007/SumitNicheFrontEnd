import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindingComponent } from './stylebinding.component';

describe('StylebindingComponent', () => {
  let component: StylebindingComponent;
  let fixture: ComponentFixture<StylebindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StylebindingComponent]
    });
    fixture = TestBed.createComponent(StylebindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
