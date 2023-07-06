import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { catchError, Observable, throwError } from "rxjs";
import { Model } from "../models/model";
import { Bus } from "../models/bus";

@Injectable({
  providedIn: 'root'
})
export class BusService {

  resourceUrl = environment.backendUrl + 'colectivos'

  constructor(private http: HttpClient) { }

  findAll(): Observable<HttpResponse<any[]>> {
    return this.http.get<any[]>(this.resourceUrl, {observe: "response"}).pipe(
      catchError(err => {
            console.log("Ocurrio un error");
            return throwError(() => "Paso algo");
          }),
      );
 }

  findOne(id: number): Observable<Bus> {
    return this.http.get<Bus>(this.resourceUrl + '/' + id).pipe(
      catchError(err => {
        console.log(err.message);
        return throwError(() => 'Ocurrio un problema');
      })
    );
  }

  crearBus(bus: BusDTO): Observable<any> {
    return this.http.post<any>(this.resourceUrl, bus).pipe(
      catchError(err => {
        console.log("Ocurrio un error: ");
        console.log(err);
        return throwError(() => "No se pudo crear la persona");
      }),
    );
  }


  actualizarBus(bus: BusDTO): Observable<any> {
    return this.http.put<any>(this.resourceUrl + '/' + bus.id, bus).pipe(
      catchError(err => {
        console.log("Ocurrio un error: ");
        console.log(err);
        return throwError(() => "No se pudo Actualizar el viaje con id" + bus.id);
      }),
    );
  }
  borrar(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>( this.resourceUrl + '/' + id, {observe: "response"}).pipe(
      catchError(err => {
        console.log("Ocurrio un error: ");
        console.log(err);
        return throwError(() => "No existe el colectivo");
      }),
    );
  }
}

export interface BusDTO {
  id: number;
  patente: string;
  cantidadAsientos: number;
  modeloId: number;
}