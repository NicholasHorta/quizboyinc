import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizShowCardComponent } from './quiz-show-card.component';

describe('QuizShowCardComponent', () => {
  let component: QuizShowCardComponent;
  let fixture: ComponentFixture<QuizShowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ QuizShowCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizShowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
