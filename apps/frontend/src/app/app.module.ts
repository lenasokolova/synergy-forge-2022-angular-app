import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewIntegrationComponent } from './components/new-integration/new-integration.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';


import { CompareIntegrationPageComponent } from '../pages/compare-integration-page/compare-integration-page.component';
import { NewIntegrationPageComponent } from '../pages/new-integration-page/new-integration-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WraperComponent } from './components/wraper/wraper.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { IntegrationListComponent } from "./integration-list/integration-list.component";
import { IntegrationItemComponent } from "./integration-item/integration-item.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@synergy-forge/frontend/core";

@NgModule({
  declarations: [
    AppComponent,
    CompareIntegrationPageComponent,
    NewIntegrationPageComponent,
    WraperComponent,
    IntegrationListComponent,
    IntegrationItemComponent,
    NavbarComponent,
    DashboardComponent,
    NewIntegrationComponent,
    WraperComponent,
    InfoCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {initialNavigation: 'enabledBlocking'}),
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    CoreModule,
    NgxDropzoneModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
