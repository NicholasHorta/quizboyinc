import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { QuizComponent } from './quiz.component';

describe('QuizComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        QuizComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(QuizComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'quiz'`, () => {
    const fixture = TestBed.createComponent(QuizComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('quiz');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(QuizComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('quiz app is running!');
  });
});
