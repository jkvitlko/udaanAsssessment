import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExcelSheetComponent } from 'src/components/excel-sheet/excel-sheet.component';


const routes: Routes = [
  {path:'',  component:ExcelSheetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
