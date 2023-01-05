import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIntegrationPageComponent } from './new-integration-page.component';

describe('NewIntegrationPageComponent', () => {
  let component: NewIntegrationPageComponent;
  let fixture: ComponentFixture<NewIntegrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewIntegrationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewIntegrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
