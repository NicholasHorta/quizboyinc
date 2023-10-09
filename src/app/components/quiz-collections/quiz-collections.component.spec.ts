import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCollectionsComponent } from './quiz-collections.component';

describe('QuizCollectionsComponent', () => {
  let component: QuizCollectionsComponent;
  let fixture: ComponentFixture<QuizCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
