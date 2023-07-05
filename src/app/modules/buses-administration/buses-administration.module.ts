import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BusesAdministrationRoutingModule } from './buses-administration-routing.module';
import { BusesListComponent} from "./buses-list/buses-list.component";
import { BusesDetailComponent } from './buses-detail/buses-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [BusesListComponent, BusesDetailComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    BusesAdministrationRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ]
})
export class BusesAdministrationModule { }
