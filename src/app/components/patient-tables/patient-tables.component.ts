import { Component } from '@angular/core';
import {
  PatientCalculations,
  GenderTable,
} from '../../utils/fuction.challenge';
import { SelectedCellService } from '../../services/selected-cell/selected-cell.service';

//interface for data of table
interface FlexibilityData {
  id: number;
  value: string;
}

@Component({
  selector: 'app-patient-tables',
  templateUrl: './patient-tables.component.html',
  styleUrls: ['./patient-tables.component.css'],
})
export class PatientTablesComponent {
  selectedCellId: number | null = null;
  menData: FlexibilityData[][] = [];
  womenData: FlexibilityData[][] = [];

  constructor(private selectedCellService: SelectedCellService) {
    this.menData = this.convertData(PatientCalculations.men, 1);
    this.womenData = this.convertData(PatientCalculations.woman, 0);
  }
  //function that converts the original object into an object to be displayed in a table
  private convertData(data: GenderTable, type: number): FlexibilityData[][] {
    const result: FlexibilityData[][] = [];
    //iteration to generate the first row and loop through the object
    for (let size = 5 + type; size <= 16 + type; size++) {
      const sizeKey = size.toString();
      if (data.hasOwnProperty(sizeKey)) {
        const subData = data[size];

        const row: FlexibilityData[] = [
          { id: parseInt(sizeKey), value: sizeKey },
        ];

        const weights = [
          79, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320,
          340, 360,
        ];
        //iteration to build the final object with its id and value
        for (const weight of weights) {
          const weightKey = weight;
          const value = subData[weightKey]?.value ?? '';
          const id = subData[weightKey]?.id ?? 0;
          row.push({ id: id, value });
        }
        result.push(row);
      }
    }
    return result;
  }
  //function to share the selected id
  ngOnInit(): void {
    this.selectedCellService.selectedCellId$.subscribe((id) => {
      this.selectedCellId = id;
    });
  }
}
