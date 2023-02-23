import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits.component';

describe('FormulaireGestionForfaitsComponent', () => {
  let component: FormulaireGestionForfaitsComponent;
  let fixture: ComponentFixture<FormulaireGestionForfaitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireGestionForfaitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireGestionForfaitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
