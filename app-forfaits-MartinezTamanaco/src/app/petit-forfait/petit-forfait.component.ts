import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-petit-forfait',
  templateUrl: './petit-forfait.component.html',
  styleUrls: ['./petit-forfait.component.css']
})
export class PetitForfaitComponent implements OnInit {
  
  forfaits: Forfait[] = [];
  
  @Input() forfait?: Forfait; 

  constructor(private forfaitService: ForfaitService) { }

  ngOnInit(): void {
    this.getForfaits();
  }
  getForfaits(): void {
    this.forfaitService.getForfaits()
    .subscribe(resultat => this.forfaits = resultat);
    }

}
