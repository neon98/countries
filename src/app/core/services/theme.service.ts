import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../models/theme.enum';


@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private mode: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.dark);

  constructor() {}

  get mode$() {
    return this.mode.asObservable();
  }

  toggleMode() {
    if (this.mode.value === Theme.dark) {
      this.mode.next(Theme.light);
    } else {
      this.mode.next(Theme.dark);
    }
  }
}