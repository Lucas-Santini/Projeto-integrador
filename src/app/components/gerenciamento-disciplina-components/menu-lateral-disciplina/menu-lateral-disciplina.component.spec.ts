import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralDisciplinaComponent } from './menu-lateral-disciplina.component';

describe('MenuLateralDisciplinaComponent', () => {
  let component: MenuLateralDisciplinaComponent;
  let fixture: ComponentFixture<MenuLateralDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralDisciplinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
