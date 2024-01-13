import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextQuestionComponent } from './next-question.component';

describe('NextQuestionComponent', () => {
  let component: NextQuestionComponent;
  let fixture: ComponentFixture<NextQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextQuestionComponent]
    });
    fixture = TestBed.createComponent(NextQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
