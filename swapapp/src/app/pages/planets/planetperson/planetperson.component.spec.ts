import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetpersonComponent } from './planetperson.component';

describe('PlanetpersonComponent', () => {
  let component: PlanetpersonComponent;
  let fixture: ComponentFixture<PlanetpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetpersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
