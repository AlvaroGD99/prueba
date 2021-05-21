import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaBandaComponent } from './nueva-banda.component';

describe('NuevaBandaComponent', () => {
  let component: NuevaBandaComponent;
  let fixture: ComponentFixture<NuevaBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaBandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
