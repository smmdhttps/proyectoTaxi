import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadTaxisPage } from './load-taxis.page';

describe('LoadTaxisPage', () => {
  let component: LoadTaxisPage;
  let fixture: ComponentFixture<LoadTaxisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoadTaxisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
