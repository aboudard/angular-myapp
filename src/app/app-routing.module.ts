import { HeroesComponent } from './heroes/heroes.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './shared/login.guard';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from "app/heroes/hero-detail/hero-detail.component";

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'heroes/:heroid',
    component: HeroDetailComponent
  },
{
  path: 'login',
  component: LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
