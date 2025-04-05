import { Component } from "@angular/core";
import { TranslocoService, TranslocoDirective } from "@jsverse/transloco";
import { NgFor } from "@angular/common";

@Component({
  selector: "app-language-switcher",
  standalone: true,
  imports: [NgFor, TranslocoDirective],
  templateUrl: `./language-switcher.component.html`
})
export class LanguageSwitcherComponent {
  currentLang: string; // stores the current language
  langs: string[]; // stores the available languages

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getActiveLang();
    // get all available languages
    const availableLangs = this.translocoService.getAvailableLangs();
    // check if langs are provided as string or object
    if (Array.isArray(availableLangs) && typeof availableLangs[0] === "string") {
      this.langs = availableLangs as string[];
    } else {
      this.langs = (availableLangs as { id: string; label: string }[]).map(lang => lang.id);
    }
  }
  
  // on change event get HTML select element value and set active lang
  onChange(event: Event): void {
    this.translocoService.setActiveLang((event.target as HTMLSelectElement).value);
  }
}
