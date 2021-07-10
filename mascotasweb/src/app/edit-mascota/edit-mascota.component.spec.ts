import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMascotaComponent } from './edit-mascota.component';

describe('EditMascotaComponent', () => {
  let component: EditMascotaComponent;
  let fixture: ComponentFixture<EditMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
