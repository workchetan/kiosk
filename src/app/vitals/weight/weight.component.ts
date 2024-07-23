import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.css']
})
export class WeightComponent implements OnInit {

  showWeight: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  checkWeight() {
    this.showWeight = true;
  }

}
