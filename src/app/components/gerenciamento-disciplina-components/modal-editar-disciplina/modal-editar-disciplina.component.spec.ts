import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarDisciplinaComponent } from './modal-editar-disciplina.component';

describe('ModalEditarDisciplinaComponent', () => {
  let component: ModalEditarDisciplinaComponent;
  let fixture: ComponentFixture<ModalEditarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEditarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEditarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
