import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
//class to share between components the selected id to display in the table
export class SelectedCellService {
  private selectedCellIdSubject = new BehaviorSubject<number | null>(null);
  selectedCellId$: Observable<number | null> =
    this.selectedCellIdSubject.asObservable();

  setSelectedCellId(id: number | null): void {
    this.selectedCellIdSubject.next(id);
  }
}
