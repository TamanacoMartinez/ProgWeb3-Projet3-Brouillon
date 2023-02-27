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
      console.log('Le dialog du formulaire de forfait a été fermé');
      this.getForfaits();
    });
  }


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


