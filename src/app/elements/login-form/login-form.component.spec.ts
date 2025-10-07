import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginForm } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginForm;
  let fixture: ComponentFixture<LoginForm>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginForm ]
    })
    .compileComponents();
    ;

    fixture = TestBed.createComponent(LoginForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
