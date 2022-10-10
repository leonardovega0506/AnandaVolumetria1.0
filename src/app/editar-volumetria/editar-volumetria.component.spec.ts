import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVolumetriaComponent } from './editar-volumetria.component';

describe('EditarVolumetriaComponent', () => {
  let component: EditarVolumetriaComponent;
  let fixture: ComponentFixture<EditarVolumetriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVolumetriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarVolumetriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
