import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralEtapaComponent } from './menu-lateral-etapa.component';

describe('MenuLateralEtapaComponent', () => {
  let component: MenuLateralEtapaComponent;
  let fixture: ComponentFixture<MenuLateralEtapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuLateralEtapaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuLateralEtapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
