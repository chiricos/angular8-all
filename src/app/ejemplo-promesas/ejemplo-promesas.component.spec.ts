import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploPromesasComponent } from './ejemplo-promesas.component';

describe('EjemploPromesasComponent', () => {
  let component: EjemploPromesasComponent;
  let fixture: ComponentFixture<EjemploPromesasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploPromesasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploPromesasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
