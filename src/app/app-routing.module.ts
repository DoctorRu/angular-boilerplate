import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociadosComponent } from './secretaria/associados/associados.component';
import { TheendComponent } from './theend/theend.component';


const routes: Routes = [
  { path: '', component: AssociadosComponent },
  { path: 'associados', component: AssociadosComponent },
  { path: 'theend', component: TheendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
