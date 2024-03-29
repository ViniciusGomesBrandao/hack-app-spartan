import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import {TauriService} from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private tauriService: TauriService,
  ) {
    if (this.tauriService.isTauri) {
      console.log('Run in Tauri');
    } else {
      console.log('Run in browser');
    }
  }
}
