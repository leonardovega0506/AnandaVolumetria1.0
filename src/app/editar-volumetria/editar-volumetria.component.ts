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
    itemCode:new FormControl('',Validators.required),
    largo:new FormControl('',Validators.required),
    ancho: new FormControl('',Validators.required),
    alto:new FormControl('',Validators.required),
    volumen:new FormControl('',Validators.required),
    peso:new FormControl('',Validators.required)
  })
  
  ngOnInit(): void {
  }
  obtenerVolumen(){

  }
  buscarDato():void{

    this.api.traerDatoPorId(this.itemCode).subscribe((data:any)=>{
      this.datosVolumetria = data[0];
      this.editarForm.setValue({
        'alto':this.datosVolumetria.alto,
        'ancho':this.datosVolumetria.ancho,
        'largo':this.datosVolumetria.largo,
        'volumen':this.datosVolumetria.volumen,
        'peso':this.datosVolumetria.peso,
        'itemCode':this.itemCode
      })
    })
  }

}
