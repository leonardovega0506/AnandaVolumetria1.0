import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LoginIV } from 'src/app/modelos/login.interface';
import { ResponseI } from 'src/app/modelos/response.interface';
import { Volumetria } from 'src/app/modelos/volumetria.interface';

@Injectable({
  providedIn: 'root'
})
export class AnandapiService{
  urlLogin:string = 'https://api.solodata.es/';
  url:string = "https://63457d39dcae733e8ff3fef3.mockapi.io"; 
  constructor(private http:HttpClient) { }

  login(form:LoginIV):Observable<ResponseI>{
    let uri = this.urlLogin+"auth";
    return this.http.post<ResponseI>(uri,form);
  }
  traerDatoPorId(ncmItem:string):Observable<Volumetria>{
    let uri = this.url+"/volumetria/"+ncmItem;
    return this.http.get<Volumetria>(uri);
  }
}
