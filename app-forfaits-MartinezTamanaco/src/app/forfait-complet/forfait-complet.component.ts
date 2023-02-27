import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Forfait } from '../forfait';
import { ForfaitService } from '../forfait.service';

@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})
export class ForfaitCompletComponent implements OnInit {
  
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
