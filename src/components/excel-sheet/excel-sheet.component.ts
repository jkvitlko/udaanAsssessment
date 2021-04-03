import { Component, ElementRef, OnInit } from '@angular/core';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-excel-sheet',
  templateUrl: './excel-sheet.component.html',
  styleUrls: ['./excel-sheet.component.scss']
})
export class ExcelSheetComponent implements OnInit {
  rowHeader = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  rows = Array(10).fill(0);
  columns = Array(10).fill(0);
  excelData = {
    rows: this.rows,
    columns: this.columns,
  }
  
  valuesData = this.rowHeader.map(ele=> {
    return Array(10).fill(0);
  })
  constructor() { }


  ngOnInit() {
    console.log(this.valuesData);
  }

  excelBox(event, rowId, colId) {
    console.log(event.target.value, "  ", rowId, " ", colId);
    const inputVal = event.target.value;
    this.valuesData[rowId][colId] = +inputVal;
  }

  mouse() {
    let sum = 0;
    this.valuesData.forEach(ele => {
      // sum += ele[rowId][colId]; 
    });
    console.log(sum);
  }

}
