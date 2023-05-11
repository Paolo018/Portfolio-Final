import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},

  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
