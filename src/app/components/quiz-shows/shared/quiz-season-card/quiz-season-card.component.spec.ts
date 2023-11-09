import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizSeasonCardComponent } from './quiz-season-card.component';

describe('QuizSeasonCardComponent', () => {
  let component: QuizSeasonCardComponent;
  let fixture: ComponentFixture<QuizSeasonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuizSeasonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizSeasonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
