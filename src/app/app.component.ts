import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmButtonDirective } from '../_components/ui-button-helm/src/lib/hlm-button.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HlmButtonDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'second';
}
