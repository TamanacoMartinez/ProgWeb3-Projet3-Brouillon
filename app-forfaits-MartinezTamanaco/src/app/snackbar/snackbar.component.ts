import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(AjoutComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

}

@Component({
  selector: 'snack-bar.component-snack',
  templateUrl: 'snackbar.component-snack.html',
  styles: [
    `
    .ajout {
      color: hotpink;
    }
  `,
  ],
})
export class AjoutComponent {}
