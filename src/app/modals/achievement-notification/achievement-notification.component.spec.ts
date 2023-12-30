import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementNotificationComponent } from './achievement-notification.component';

describe('AchievementNotificationComponent', () => {
  let component: AchievementNotificationComponent;
  let fixture: ComponentFixture<AchievementNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchievementNotificationComponent]
    });
    fixture = TestBed.createComponent(AchievementNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
