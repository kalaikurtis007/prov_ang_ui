import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDefaultFooterComponent } from './app-default-footer.component';

describe('AppDefaultFooterComponent', () => {
  let component: AppDefaultFooterComponent;
  let fixture: ComponentFixture<AppDefaultFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDefaultFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDefaultFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
