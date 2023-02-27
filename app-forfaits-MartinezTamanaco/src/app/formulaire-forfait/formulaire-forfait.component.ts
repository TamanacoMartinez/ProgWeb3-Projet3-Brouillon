import { Component, EventEmitter, Inject, OnInit, Output, ViewChild } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  @Output() forfaitAjoute = new EventEmitter();

  //  newForfait: Forfait = {nom: 'Forfait numéro 1', description: 'Description du forfait numéro 1', code: 'ABC000', categories:[], 
  //  etablissement:{
  //   coordonnees:{
  //     adresse:'1233, av des Gouverneurs.', 
  //     courriel: 'tamanacomb@gmail.com',
  //     site_web: 'tamanaco.martinez.com', 
  //     telephone: '418-922-5385',
  //     ville: 'Québec'
  //   },
  //   description_etablissement: 'Lorem Ipsum...',
  //   nom_etablissement: 'Hotel Pur'
  //  }, 
  //  date_debut: '', date_fin: '', prix: 0, nouveau_prix: 0, premium: false, avis:[]};
   

   forfait: Forfait = {id: 0, nom: 'Forfait numéro 1', description: 'Description du forfait numéro 1', code: 'ABC000', categories:[], 
   etablissement:{
    coordonnees:{
      adresse:'1233, av des Gouverneurs.', 
      courriel: 'tamanacomb@gmail.com',
      site_web: 'tamanaco.martinez.com', 
      telephone: '418-922-5385',
      ville: 'Québec'
    },
    description_etablissement: 'Lorem Ipsum...',
    nom_etablissement: 'Hotel Pur'
   }, 
   date_debut: '2022-11-09', date_fin: '2022-11-15', prix: 0, nouveau_prix: 0, premium: false, avis:[]};


  
  constructor(
    private forfaitService: ForfaitService,
    public dialogRef: MatDialogRef<FormulaireForfaitComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Forfait) { 
      if (data) {
        this.forfait = data;
        }
    }

  ngOnInit(): void {
  }

  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
    this.forfaitService.addForfait(this.forfait).subscribe(
    _ => {
    forfaitFormAjout.resetForm();
    // this.forfaitAjoute.emit(); 
    this.dialogRef.close(); }
      );
    }
  }
 

  updateForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
    this.forfaitService.updateForfait(this.forfait).subscribe(
    _ => {
    forfaitFormAjout.resetForm();
    // this.forfaitAjoute.emit(); 
    this.dialogRef.close(); }
      );
    }
  }

  annuler() {
    this.dialogRef.close();
    }

}



