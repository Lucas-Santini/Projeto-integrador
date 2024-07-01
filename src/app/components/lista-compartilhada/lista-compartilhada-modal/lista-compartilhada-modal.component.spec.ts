import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompartilhadaModalComponent } from './lista-compartilhada-modal.component';

describe('ListaCompartilhadaModalComponent', () => {
  let component: ListaCompartilhadaModalComponent;
  let fixture: ComponentFixture<ListaCompartilhadaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCompartilhadaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCompartilhadaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
