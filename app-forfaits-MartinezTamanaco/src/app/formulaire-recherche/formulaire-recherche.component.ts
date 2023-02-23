import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formulaire } from '../formulaire';

@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
    @Input() formulaire: Formulaire = {
      nom: "",
      code: "",
      prix: 0
    }
    @Output() formulaireChange = new EventEmitter();
    showFiller = false;
   
  constructor() { }

  ngOnInit(): void {
  }

}

