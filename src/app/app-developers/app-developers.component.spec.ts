import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDevelopersComponent } from './app-developers.component';

describe('AppDevelopersComponent', () => {
  let component: AppDevelopersComponent;
  let fixture: ComponentFixture<AppDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
