import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  a :number =1  ;
  b:number=1;
  c:string="";

}
