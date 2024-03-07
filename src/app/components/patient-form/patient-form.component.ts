import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Genders } from '../../utils/fuction.challenge';
import { PatientService } from '../../services/patient-service/patient.service';
import { PatientTablesComponent } from '../patient-tables/patient-tables.component';
import { SelectedCellService } from '../../services/selected-cell/selected-cell.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css'],
})
export class PatientFormComponent {
  patientForm: FormGroup;
  genders = ['male', 'female'];
  flexibilityResult: string | null = null;
  flexibilityId: number | null = 0;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private selectedCellService: SelectedCellService
  ) {
    this.patientForm = this.formBuilder.group({
      gender: [Genders.male],
      weight: [''],
      shoeSize: [''],
    });
  }
  //function to call the flexibility calculator when clicked in button
  onSubmit(): void {
    const { gender, weight, shoeSize } = this.patientForm.controls;
    const flexibility = this.patientService.getPatientFlex(
      gender.value,
      weight.value,
      shoeSize.value
    );
    if (flexibility) {
      //set the result to the corresponding variables
      this.flexibilityResult = flexibility.value;
      this.flexibilityId = flexibility.id;
      this.selectedCellService.setSelectedCellId(flexibility.id);
    } else {
      this.flexibilityResult = 'No se encontró un nivel de flexibilidad.';
    }
  }
}
