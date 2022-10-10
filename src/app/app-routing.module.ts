import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditarVolumetriaComponent } from './editar-volumetria/editar-volumetria.component';

const routes: Routes = [{
  path:'',
  redirectTo:'loginVolumetria',
  pathMatch:'full'
},
  {path:'loginVolumetria',component:LoginComponent},
  {path:'dashboardVolumetria',component:DashboardComponent},
  {path:'volumetria',component:EditarVolumetriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const rountingComponent=[LoginComponent,DashboardComponent,EditarVolumetriaComponent]
