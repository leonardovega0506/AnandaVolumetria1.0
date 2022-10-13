import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AnandapiService } from '../service/api/anandaAPI.service';
import { Router } from '@angular/router';
import { ResponseI } from '../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    usuario:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
  errorStatus:boolean=false;
  errorMsj:any="";
  constructor(private api:AnandapiService, private router:Router) { }

  ngOnInit(): void {
  }
  onLogin(form:any){
    this.api.login(form).subscribe(data =>{
      let dataResponse:ResponseI=data;
      if(dataResponse.status=="ok"){
        localStorage.setItem("token",dataResponse.result.token);
        this.router.navigate(['volumetria']);
      }
      else{
        this.errorStatus=true;
        this.errorMsj=dataResponse.result.error_msg;
      }
    })
  }

}
