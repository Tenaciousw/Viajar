import { Component} from '@angular/core';
import { Bus } from 'src/app/models/bus';


@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent {
  dataSource: any
  displayedColumns = ['Id', 'Patente', 'Cantidad de Asientos', 'Modelo'];
  ;

}
