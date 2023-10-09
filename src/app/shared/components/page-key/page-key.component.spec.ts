import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocatorComponent } from './page-key.component';

describe('PageLocatorComponent', () => {
  let component: PageLocatorComponent;
  let fixture: ComponentFixture<PageLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLocatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
