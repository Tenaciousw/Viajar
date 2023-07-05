import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import { BusesListComponent} from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    BusesAdministrationRoutingModule,
    
  ]
})
export class BusesAdministrationModule { }
