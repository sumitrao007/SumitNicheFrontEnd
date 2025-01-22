import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltpipeComponent } from './inbuiltpipe.component';

describe('InbuiltpipeComponent', () => {
  let component: InbuiltpipeComponent;
  let fixture: ComponentFixture<InbuiltpipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuiltpipeComponent]
    });
    fixture = TestBed.createComponent(InbuiltpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
