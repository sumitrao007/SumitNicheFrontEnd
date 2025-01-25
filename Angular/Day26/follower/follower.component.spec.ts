import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowerComponent } from './follower.component';

describe('FollowerComponent', () => {
  let component: FollowerComponent;
  let fixture: ComponentFixture<FollowerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowerComponent]
    });
    fixture = TestBed.createComponent(FollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
