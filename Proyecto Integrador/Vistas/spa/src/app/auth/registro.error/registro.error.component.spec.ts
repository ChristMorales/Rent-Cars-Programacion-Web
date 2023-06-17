import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroErrorComponent } from './registro.error.component';

describe('RegistroErrorComponent', () => {
  let component: RegistroErrorComponent;
  let fixture: ComponentFixture<RegistroErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
