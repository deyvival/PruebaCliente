import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DataComponent } from './components/data/data.component';
import { ClienhisComponent } from './components/clienhis/clienhis.component';
import { EmerconfComponent } from './components/emerconf/emerconf.component';
import { EmerhistComponent } from './components/emerhist/emerhist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: DataComponent},
  {path: 'clienhis', component: ClienhisComponent},
  {path: 'emerconf', component: EmerconfComponent},
  {path: 'emerhist', component: EmerhistComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
