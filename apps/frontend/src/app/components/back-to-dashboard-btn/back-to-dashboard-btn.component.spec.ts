import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToDashboardBtnComponent } from './back-to-dashboard-btn.component';

describe('BackToDashboardBtnComponent', () => {
  let component: BackToDashboardBtnComponent;
  let fixture: ComponentFixture<BackToDashboardBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToDashboardBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BackToDashboardBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
