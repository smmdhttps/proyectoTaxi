import { Component, OnInit } from '@angular/core';
import { TaxiCrudService } from 'src/services/taxi-crud.service';;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage implements OnInit {
  taxis: any[''];

  constructor(private taxiService: TaxiCrudService) {}

  ngOnInit() {
    this.loadTaxis();
  }

  loadTaxis() {
    this.taxiService.getTaxis().subscribe((data) => {
      this.taxis = data;
    });
  } 
}
