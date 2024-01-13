import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizShowsComponent } from './quiz-shows.component';

describe('QuizShowsComponent', () => {
  let component: QuizShowsComponent;
  let fixture: ComponentFixture<QuizShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
