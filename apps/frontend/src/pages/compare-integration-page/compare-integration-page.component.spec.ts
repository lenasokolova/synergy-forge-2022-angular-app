import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareIntegrationPageComponent } from './compare-integration-page.component';

describe('CompareIntegrationPageComponent', () => {
  let component: CompareIntegrationPageComponent;
  let fixture: ComponentFixture<CompareIntegrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareIntegrationPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CompareIntegrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
