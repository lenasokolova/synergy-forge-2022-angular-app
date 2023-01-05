import { IIntegration } from '@synergy-forge/frontend/core';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IntegrationsService } from '@synergy-forge/frontend/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'synergy-forge-integration-list',
  templateUrl: './integration-list.component.html',
  styleUrls: ['./integration-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationListComponent implements OnInit {
  integrations$!: Observable<IIntegration[]>;

  constructor(private integrationService: IntegrationsService) {
  }

  ngOnInit(): void {
    this.integrations$ = this.integrationService.getAll();
  }
}
