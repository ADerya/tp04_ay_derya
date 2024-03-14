import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaireCarteComponent
 } from './formulaire-carte/formulaire-carte.component';
 import { ListeCarteComponent } from './liste-carte/liste-carte.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormulaireCarteComponent, ListeCarteComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: [
    FormulaireCarteComponent, ListeCarteComponent
  ]
})
export class CarteModule { }
