import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendboxComponent } from './friedbox.component';

describe('FriedboxComponent', () => {
  let component: FriendboxComponent;
  let fixture: ComponentFixture<FriendboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FriendboxComponent]
    });
    fixture = TestBed.createComponent(FriendboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
