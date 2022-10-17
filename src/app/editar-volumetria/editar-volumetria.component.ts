import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'; 
import { Volumetria } from '../modelos/volumetria.interface';
import { AnandapiService } from '../service/api/anandaAPI.service';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { TraerDato } from '../modelos/itemCode.interface';

@Component({
  selector: 'app-editar-volumetria',
  templateUrl: './editar-volumetria.component.html',
  styleUrls: ['./editar-volumetria.component.css']
})
export class EditarVolumetriaComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute, private router:Router, private api: AnandapiService) { }
  itemCode:string;




  datosVolumetria:Volumetria;
  editarForm = new FormGroup({
    alto: new FormControl('',Validators.required),
    itemCode:new FormControl('',Validators.required),
    largo:new FormControl('',Validators.required),
    ancho: new FormControl('',Validators.required),
    volumen:new FormControl('',Validators.required),
    peso:new FormControl('',Validators.required)
  })
  
  ngOnInit(): void {
  }
  obtenerVolumen():any{
    let volumen:number;
    volumen= (this.datosVolumetria.alto*this.datosVolumetria.ancho)*this.datosVolumetria.largo;
      return volumen;
  }
  buscarDato():void{

    this.api.traerDatoPorId(this.itemCode).subscribe((data:any)=>{
      console.log(data);
      this.datosVolumetria = data;
      console.log(this.datosVolumetria);
      
      this.editarForm.setValue({
        'ancho':this.datosVolumetria.ancho,
        'largo':this.datosVolumetria.largo,
        'alto':this.datosVolumetria.alto,
        'volumen':this.obtenerVolumen(),
        'peso':this.datosVolumetria.peso,
        'itemCode':this.itemCode
      })
    })
  }
  putForm(form:any,itemCode:string){
    this.api.putVolumetria(form,itemCode).subscribe((data:any)=>{
      console.log;
    })
  }

}
