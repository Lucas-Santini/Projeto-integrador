import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarEtapaComponent } from './modal-criar-etapa.component';

describe('ModalCriarEtapaComponent', () => {
  let component: ModalCriarEtapaComponent;
  let fixture: ComponentFixture<ModalCriarEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCriarEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
