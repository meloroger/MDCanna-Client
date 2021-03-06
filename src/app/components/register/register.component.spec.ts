import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { User } from 'src/app/model/user.model';
import { ValidateService } from 'src/app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockValidateService;
  let mockFlashMessageService;
  let mockUserService;
  let user: User;

  beforeEach(() => {
    user = {
      id: '1',
      email: 'testUser@gmail.com',
      password: 'yourPassword'
    };

    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [RegisterComponent],
      providers: [
        { provide: ValidateService, useValue: mockValidateService },
        { provide: FlashMessagesService, useValue: mockFlashMessageService },
        { provide: UserService, useValue: mockUserService }
      ]
    }).compileComponents();
    mockValidateService = jasmine.createSpyObj([
      'validateRegister',
      'valdateEmail'
    ]);
    mockFlashMessageService = jasmine.createSpyObj(['show']);
    mockUserService = jasmine.createSpyObj(['registerUser']);

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
