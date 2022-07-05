import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDefaultHeaderComponent } from './app-default-header.component';

describe('AppDefaultHeaderComponent', () => {
  let component: AppDefaultHeaderComponent;
  let fixture: ComponentFixture<AppDefaultHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDefaultHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDefaultHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
