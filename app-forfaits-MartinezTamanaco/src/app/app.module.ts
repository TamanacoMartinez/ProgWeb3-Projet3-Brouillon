import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ForfaitService } from './forfait.service';


import { PrixComponent } from './prix/prix.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits/formulaire-gestion-forfaits.component';
import { FormulaireAvisComponent } from './formulaire-avis/formulaire-avis.component';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';


import { SnackbarComponent } from './snackbar/snackbar.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitsComponent,
    PrixComponent,
    PetitForfaitComponent,
    ForfaitCompletComponent,
    FormulaireRechercheComponent,
    FormulaireGestionForfaitsComponent,
    FormulaireAvisComponent,
    FormulaireContactComponent,
    SnackbarComponent,
    FormulaireForfaitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    CommonModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
