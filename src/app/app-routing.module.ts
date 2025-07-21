import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "login" , component: LoginComponent
  },
  {path: "register", component : RegisterComponent},
  {
    path: "home",component: HomeComponent
  },
  {path: "about", component: AboutComponent},
  {path: "services", component: ServicesComponent},
  {path: "contect", component: ContectComponent},
   { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
