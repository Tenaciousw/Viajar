import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BusDTO, BusService } from 'src/app/services/bus.service';
import { ModeloService } from 'src/app/services/modelo.service';

@Component({
  selector: 'app-buses-detail',
  templateUrl: './buses-detail.component.html',
  styleUrls: ['./buses-detail.component.css']
})
export class BusesDetailComponent implements OnInit {

  busform = this.formBuilder.group({
    patente: ['', Validators.required],
    cantidadAsientos: [0, [Validators.required, Validators.min(0), Validators.max(50)]],
    modeloId: [0, [Validators.required, Validators.min(0), Validators.max(50)]]
  })

  busId: number | null = null;

  constructor(private formBuilder: FormBuilder,
    private busService: BusService,
    private modeloService: ModeloService,
    private router: Router,
    private route: ActivatedRoute,
    private matSnackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get("id");
      if (id) {
        this.busId = Number(id);
        this.findBus(this.busId);
      }
    });
  }

  findBus(id: number) {
    this.busService.findOne(id).subscribe(res => {
      if (res) {
        const bus = res;
        this.busform.patchValue({
          patente: bus.patente,
          cantidadAsientos: bus.cantidadAsientos,
          modeloId: bus.modeloId
        });
      }
    }, error => {
      console.log(error);
      this.matSnackBar.open(error, "Cerrar");
    });
  }

  guardarCambios() {
    if (this.busform.invalid) {
      return;
    }

    const busDTO: BusDTO = {
      id: this.busId,
      patente: this.busform.get('patente').value,
      cantidadAsientos: this.busform.get('cantidadAsientos').value,
      modeloId: this.busform.get('modeloId').value
    };

    if (this.busId) {
      // Actualizar el bus
      this.busService.actualizarBus(busDTO).subscribe(res => {
        this.matSnackBar.open("Se guardaron los cambios del bus", "Cerrar");
        this.router.navigate(['buses', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    } else {
      // Crear un nuevo bus
      this.busService.crearBus(busDTO).subscribe(res => {
        this.matSnackBar.open("Se creó el bus correctamente", "Cerrar");
        this.router.navigate(['buses', 'list']);
      }, error => {
        console.log(error);
        this.matSnackBar.open(error, "Cerrar");
      });
    }
  }

  volverAtras() {
    this.router.navigate(['buses', 'list']);
  }

}