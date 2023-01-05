import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'synergy-forge-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.scss'],
})
export class AddBudgetComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }


  private createForm(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      budget: new FormControl(0),
      participants: new FormControl(0),
    });
  }
}
