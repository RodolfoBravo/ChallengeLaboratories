import { Component } from '@angular/core';
import {
  PatientCalculations,
  GenderTable,
} from '../../utils/fuction.challenge';
import { SelectedCellService } from '../../services/selected-cell/selected-cell.service';

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

  private convertData(data: GenderTable, type: number): FlexibilityData[][] {
    const result: FlexibilityData[][] = [];

    // Iterar sobre los datos para cada edad
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
  ngOnInit(): void {
    this.selectedCellService.selectedCellId$.subscribe((id) => {
      console.log('Selected Cell ID:', id);
      this.selectedCellId = id;
      // Aquí puedes hacer lo que necesites con el ID seleccionado en la tabla
      // Por ejemplo, resaltar la celda correspondiente
    });
  }
}
