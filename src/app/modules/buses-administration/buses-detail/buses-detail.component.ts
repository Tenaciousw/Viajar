import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buses-detail',
  templateUrl: './buses-detail.component.html',
  styleUrls: ['./buses-detail.component.css']
})
export class BusesDetailComponent implements OnInit{

  busform = this.formBuilder.group( {
    patente: ['', Validators.required],
    cantidadAsientos: ['', Validators.required, Validators.min(0), Validators.max(50)],
    Modeloid: ['', Validators.required, Validators.min(0), Validators.max(50)]
  })
      
  constructor(private formBuilder: FormBuilder) {
    
  }
  ngOnInit() {

  }
  
}
