import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTablesComponent } from './patient-tables.component';

describe('PatientTablesComponent', () => {
  let component: PatientTablesComponent;
  let fixture: ComponentFixture<PatientTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
