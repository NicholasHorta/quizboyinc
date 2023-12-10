import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { ProfileService } from '@app/services/profile/profile.service';
import { of } from 'rxjs';
import { UserMock } from '@app/shared/mocks/data.mocks';
import { By } from '@angular/platform-browser';


describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      providers: [
        {provide: ProfileService, useValue: {currentUser$: of(UserMock)}}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Profile component', () => {
    expect(component).toBeTruthy();
  });
describe('ProfileComponent', () => {
  // const profileWrapper = ;
  it('should reflect correct username', () => {
    const username = fixture.debugElement.query(By.css('[data-testid="profile-wrapper"]')).query(By.css('h1')).nativeElement.textContent;
    expect(username).toEqual('TestUser69')
  })
})


});
