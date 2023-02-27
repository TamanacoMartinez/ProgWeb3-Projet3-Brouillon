import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits/formulaire-gestion-forfaits.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { ListeForfaitsComponent } from './liste-forfaits/liste-forfaits.component';
import { PetitForfaitComponent } from './petit-forfait/petit-forfait.component';
import { ForfaitCompletComponent } from './forfait-complet/forfait-complet.component';
import { AccueilComponent } from './accueil/accueil.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';

const routes: Routes = [

  { path: '', redirectTo: '/liste-produits', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'forfait-complet', component: ForfaitCompletComponent },
  { path: 'petit-forfait', component: PetitForfaitComponent },
  { path: 'formulaire-recherche', component: FormulaireRechercheComponent },
  { path: 'formulaire-gestion-forfaits', component: FormulaireForfaitComponent },
  { path: 'gestion-forfaits', component: FormulaireGestionForfaitsComponent },
  { path: 'formulaire-contact', component: FormulaireContactComponent },
  { path: 'graphiques', component: GraphiquesComponent },
  { path: 'a-propos', component: AProposComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
