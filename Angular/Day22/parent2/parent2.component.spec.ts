import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2Component } from './parent2.component';

describe('Parent2Component', () => {
  let component: Parent2Component;
  let fixture: ComponentFixture<Parent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Parent2Component]
    });
    fixture = TestBed.createComponent(Parent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
