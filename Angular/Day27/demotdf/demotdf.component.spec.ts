import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemotdfComponent } from './demotdf.component';

describe('DemotdfComponent', () => {
  let component: DemotdfComponent;
  let fixture: ComponentFixture<DemotdfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemotdfComponent]
    });
    fixture = TestBed.createComponent(DemotdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
