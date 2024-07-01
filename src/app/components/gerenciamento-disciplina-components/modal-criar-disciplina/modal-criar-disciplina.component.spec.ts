import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarDisciplinaComponent } from './modal-criar-disciplina.component';

describe('ModalCriarDisciplinaComponent', () => {
  let component: ModalCriarDisciplinaComponent;
  let fixture: ComponentFixture<ModalCriarDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCriarDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
