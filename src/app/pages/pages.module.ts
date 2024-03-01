import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { TauriService } from '../core/services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HlmButtonDirective } from '../_components/ui-button-helm/src/lib/hlm-button.directive';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    HlmButtonDirective
  ],
  providers: [
    TauriService
  ]
})
export class PagesModule { }
