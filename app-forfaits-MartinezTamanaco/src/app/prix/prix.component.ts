import { Component, Input, OnInit } from '@angular/core';
import { Forfait } from '../forfait';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  @Input() prix? = -1;
  @Input() nouveau_prix? = 0;
  




  
 
  constructor() { }

  ngOnInit(): void {
  }

}
