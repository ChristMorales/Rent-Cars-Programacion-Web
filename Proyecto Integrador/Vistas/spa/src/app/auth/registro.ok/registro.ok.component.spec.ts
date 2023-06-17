import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOkComponent } from './registro.ok.component';

describe('RegistroOkComponent', () => {
  let component: RegistroOkComponent;
  let fixture: ComponentFixture<RegistroOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
