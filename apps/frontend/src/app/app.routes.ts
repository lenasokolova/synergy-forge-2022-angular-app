import { Route } from '@angular/router';
import { CompareIntegrationPageComponent } from '../pages/compare-integration-page/compare-integration-page.component';
import { NewIntegrationPageComponent } from '../pages/new-integration-page/new-integration-page.component';
import { IntegrationListComponent } from './integration-list/integration-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: IntegrationListComponent,
  },
  {
    path: 'addIntegration',
    component: NewIntegrationPageComponent
  },
  {
    path: 'compareIntegration',
    component: CompareIntegrationPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
