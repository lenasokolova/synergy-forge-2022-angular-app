import { Conditional } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'synergy-forge-new-integration',
  templateUrl: './new-integration.component.html',
  styleUrls: ['./new-integration.component.scss'],
})
export class NewIntegrationComponent implements OnInit {
  condition = false;
  constructor() {}

  ngOnInit(): void {}

  Show() {
    this.condition =!this.condition;
  }
}
