import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/core/models/theme.enum';
import { ThemeService } from 'src/app/core/services/theme.service';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  theme: Observable<Theme> = new Observable<Theme>();
  themeVal = Theme.dark;
  Theme = Theme;

  lightThemeIcon = faSun;
  darkThemeIcon = faMoon;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.theme = this.themeService.mode$;
    this.theme.subscribe(t => this.themeVal = t)
  }
  
  toggleTheme() {
    this.themeService.toggleMode();
  }
}
