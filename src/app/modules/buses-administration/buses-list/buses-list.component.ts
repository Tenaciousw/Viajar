import { Component } from '@angular/core';
import { Bus } from 'src/app/models/bus';
import { Router } from '@angular/router';
import { BusService } from 'src/app/services/bus.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModeloService } from 'src/app/services/modelo.service';
import { Model } from 'src/app/models/model';

@Component({
  selector: 'app-buses-list',
  templateUrl: './buses-list.component.html',
  styleUrls: ['./buses-list.component.css']
})
export class BusesListComponent {

  displayedColumns = ['id', 'patente', 'cantidadAsientos', 'modeloId', 'acciones'];
  dataSource = [new Bus(1, 'ad1234', 1, 1)];
  busList: Bus[] = [];

  constructor(private busService: BusService,
    private matSnackBar: MatSnackBar,
    private router: Router,
    private modeloService: ModeloService) {
  }

  ngOnInit() {
    this.loadBus();
  }

  loadBus() {
    this.busService.findAll().subscribe(res => {
      if (res.body)
        this.busList = res.body.map(json => new Bus(json.id, json.patente, json.cantidadAsientos, json.modeloId));
    }, error => {
      console.log("Ocurrio un error, Imposible!");
    });
  }

  findModeloColectivo(colectivo: Bus) {
    this.modeloService.findOne(colectivo.modeloId).subscribe(res => {
      colectivo.modelo = new Model(res.id, res.nombre, res.marca);
    })
  }

  crearBus() {
    this.router.navigate(['buses', 'create']);
  }

  editarBus(bus: Bus) {
    this.router.navigate(['buses', 'detail', bus.id]);
  }

  borrarBus(bus: Bus) {
    this.busService.borrar(bus.id).subscribe(res => {
      this.matSnackBar.open("Se borro correctamente el Bus", "Cerrar");
      this.ngOnInit();
    }, error => {
      console.log(error);
      this.matSnackBar.open(error, "Cerrar");
    });
  }

}