import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEtapaComponent } from './modal-editar-etapa.component';

describe('ModalEditarEtapaComponent', () => {
  let component: ModalEditarEtapaComponent;
  let fixture: ComponentFixture<ModalEditarEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditarEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
