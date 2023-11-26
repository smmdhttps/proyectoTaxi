import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTaxisPage } from './edit-taxis.page';

describe('EditTaxisPage', () => {
  let component: EditTaxisPage;
  let fixture: ComponentFixture<EditTaxisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditTaxisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
