import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})
export class FormulaireForfaitComponent implements OnInit {
  @Output() forfaitAjoute = new EventEmitter();

   // newForfait: Forfait = {nom: '', description: '', code: '', categories:[], etablissement:{}, date_debut: '', date_fin: '', prix: 0, nouveau_prix: 0, premium: false, avis:[]};
   newForfait: Forfait = {nom:'', description: '', code: '', prix: 0};
  

  constructor(private forfaitService: ForfaitService,
              public dialogRef: MatDialogRef<FormulaireForfaitComponent>) { }

  ngOnInit(): void {
  }

  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
    this.forfaitService.addForfait(this.newForfait).subscribe(
    _ => {
    forfaitFormAjout.resetForm();
    this.forfaitAjoute.emit(); 
    this.dialogRef.close(); }
      );
    }
  }
  annuler() {
    this.dialogRef.close();
    }


}
