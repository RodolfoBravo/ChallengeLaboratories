import { Injectable } from '@angular/core';
import { Genders, PatientCalculations } from '../../utils/fuction.challenge';
interface Flexibility {
  value: string;
  id: number;
}
@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor() {}

  getPatientFlex(
    gender: Genders,
    weight: number,
    shoeSize: string
  ): Flexibility | undefined {
    return PatientCalculations.getPatientFlex(gender, weight, shoeSize);
  }
}

export { Genders };
