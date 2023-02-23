import { Component, Input,  OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';
// import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';


@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  @Input() premium? = true;

  forfaits: Forfait[] = [];
  
  // forfaits = FORFAITS

  formulaire: Formulaire = {
    nom: '',
    code: '',
    prix: 0
  };

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe(resultat => this.forfaits = resultat);
    }

}
