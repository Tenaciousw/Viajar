import {Component} from '@angular/core';  
import { Bus } from 'src/app/models/bus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent {
  displayedColumns = ['id','patente','cantidadAsientos','modeloId','acciones'];
  dataSource = [new Bus(1,'ad1234',1,1)];
  
  }
