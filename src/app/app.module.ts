import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { EstudioAddComponent } from './modales/estudio-add/estudio-add.component';
import { SobremiAddComponent } from './modales/sobremi-add/sobremi-add.component';
import { RouterOutlet } from '@angular/router';
import { PersonaService } from './servicios/persona.service';
import { HabilidadAddComponent } from './modales/habilidad-add/habilidad-add.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { interceptorProvider } from './servicios/interceptor-service.service';
import { ExperienciaAddComponent } from './modales/experiencia-add/experiencia-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    SobremiComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    PortafolioComponent,
    ContactoComponent,
    FooterComponent,
    IndexComponent,
    EstudioAddComponent,
    SobremiAddComponent,
    HabilidadAddComponent,
    IniciarSesionComponent,
    ExperienciaAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet
  ],
  providers: [
    PersonaService,
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
