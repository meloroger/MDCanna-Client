import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Directive, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' }
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockAuthService = jasmine.createSpyObj('AuthService', {
    loggedIn: true
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, RouterLinkDirectiveStub],
      providers: [{ provide: AuthService, useValue: mockAuthService }]
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
