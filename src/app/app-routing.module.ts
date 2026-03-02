import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { CommissioneComponent } from './components/commissione/commissione.component';
import { PrezziComponent } from './components/prezzi/prezzi.component';
import { TestimonianzeComponent } from './components/testimonianze/testimonianze.component';
import { ContattiComponent } from './components/contatti/contatti.component';

const routes: Routes = [
  { path: '',             component: HomeComponent },
  { path: 'chi-sono',     component: ChiSonoComponent },
  { path: 'galleria',     component: GalleriaComponent },
  { path: 'commissione',  component: CommissioneComponent },
  { path: 'prezzi',       component: PrezziComponent },
  { path: 'testimonianze',component: TestimonianzeComponent },
  { path: 'contatti',     component: ContattiComponent },
  { path: '**',           redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
