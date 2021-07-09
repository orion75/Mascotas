import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRazaComponent } from './edit-raza.component';

describe('EditRazaComponent', () => {
  let component: EditRazaComponent;
  let fixture: ComponentFixture<EditRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRazaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
