import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedCellService {
  private selectedCellIdSubject = new BehaviorSubject<number | null>(null);
  selectedCellId$: Observable<number | null> =
    this.selectedCellIdSubject.asObservable();

  setSelectedCellId(id: number | null): void {
    this.selectedCellIdSubject.next(id);
  }
}
