import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { GalleriaComponent } from './components/galleria/galleria.component';
import { CommissioneComponent } from './components/commissione/commissione.component';
import { PrezziComponent } from './components/prezzi/prezzi.component';
import { TestimonianzeComponent } from './components/testimonianze/testimonianze.component';
import { ContattiComponent } from './components/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ChiSonoComponent,
    GalleriaComponent,
    CommissioneComponent,
    PrezziComponent,
    TestimonianzeComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
