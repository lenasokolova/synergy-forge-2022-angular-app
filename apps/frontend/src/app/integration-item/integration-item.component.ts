import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IIntegration } from '@synergy-forge/frontend/core';

@Component({
  selector: 'synergy-forge-integration-item',
  templateUrl: './integration-item.component.html',
  styleUrls: ['./integration-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntegrationItemComponent  {
  @Input()
  integration!:IIntegration;

  constructor() {
  }

}
