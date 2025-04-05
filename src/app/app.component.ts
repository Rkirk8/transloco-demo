import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
// add the langage switcher component
import { LanguageSwitcherComponent } from './language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslocoDirective, LanguageSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'transloco-demo';
}
