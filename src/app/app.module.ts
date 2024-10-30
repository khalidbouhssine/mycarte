import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { CarteEtudiantComponent } from './carte-etudiant/carte-etudiant.component';
import { FormulaireEtudiantComponent } from './formulaire-etudiant/formulaire-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteEtudiantComponent,
    FormulaireEtudiantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
