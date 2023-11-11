import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteTaxisPage } from './delete-taxis.page';

describe('DeleteTaxisPage', () => {
  let component: DeleteTaxisPage;
  let fixture: ComponentFixture<DeleteTaxisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DeleteTaxisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
