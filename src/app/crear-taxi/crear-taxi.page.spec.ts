import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearTaxiPage } from './crear-taxi.page';

describe('CrearTaxiPage', () => {
  let component: CrearTaxiPage;
  let fixture: ComponentFixture<CrearTaxiPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearTaxiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
