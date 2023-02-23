import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAvisComponent } from './formulaire-avis.component';

describe('FormulaireAvisComponent', () => {
  let component: FormulaireAvisComponent;
  let fixture: ComponentFixture<FormulaireAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
