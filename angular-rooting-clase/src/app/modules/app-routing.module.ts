import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/login/login.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { StudentDetailComponent } from '../components/student-detail/student-detail.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'dashboard',component: DashboardComponent},
  {path: 'student/:Id', component: StudentDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: '/login'}, //carga del componente por defecto
  {path: '**', component: PageNotFoundComponent} //Carga cuando no ha encontrado otra coincidencia
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
