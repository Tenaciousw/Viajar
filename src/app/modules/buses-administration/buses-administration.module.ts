import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import {BusesListComponent} from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';


@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    BusesAdministrationRoutingModule
  ]
})
export class BusesAdministrationModule { }
