import { Component, OnInit, ViewChild } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FormulaireForfaitComponent } from '../formulaire-forfait/formulaire-forfait.component';

@Component({
  selector: 'app-formulaire-gestion-forfaits',
  templateUrl: './formulaire-gestion-forfaits.component.html',
  styleUrls: ['./formulaire-gestion-forfaits.component.css']
})
export class FormulaireGestionForfaitsComponent implements OnInit {
  dataSourceForfaits: MatTableDataSource<Forfait> = new MatTableDataSource();
  columnsToDisplay = ['nom', 'telephone', 'courriel', 'code', 'date_debut', 'date_fin', 'prix', 'actions'];

  // newForfait: Forfait = {nom: '', description: '', code: '', categories:[], etablissement:{}, date_debut: '', date_fin: '', prix: 0, nouveau_prix: 0, premium: false, avis:[]};
  newForfait: Forfait = {nom:'', description: '', code: '', prix: 0};

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private forfaitService: ForfaitService, 
              private _snackBar: MatSnackBar,
              public dialog: MatDialog){}
  
    
  ngOnInit(): void {
    this.getForfaits()
  }

  getForfaits() { 
    this.forfaitService.getForfaits().subscribe(
      resultat => {
        this.dataSourceForfaits = new MatTableDataSource(resultat);
        this.dataSourceForfaits.paginator = this.paginator;
        this.dataSourceForfaits.sort = this.sort;
      }
    );
  }
  
  addForfait(forfaitFormAjout: NgForm) {
    if (forfaitFormAjout.valid) {
    this.forfaitService.addForfait(this.newForfait).subscribe(
    _ => {
    forfaitFormAjout.resetForm();
    this.getForfaits(); }
      );
    }
  }

  deleteForfait(id: number) {
    this.forfaitService.deleteForfait(id).subscribe(
      _ => {
        this.getForfaits();
        this._snackBar.open("Forfait supprimé !", undefined, {
        duration: 2000
        });
      }
    );
  }

  openDialog(forfait?: Forfait) {
      console.log(forfait);
      const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
      data: forfait,
    });
      dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialog du formulaire de héro a été fermé');
      this.getForfaits();
    });
  }

  // forfaitAjoute() {
  //   this.getForfaits();
  //   this._snackBar.open("Forfait ajouté !", undefined, {
  //     duration: 2000
  //   });
  // }


  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceForfaits.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceForfaits.paginator) {
      this.dataSourceForfaits.paginator.firstPage();
    }
  }
  

}


