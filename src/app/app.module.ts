import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*RUTAS*/
import { APP_ROUTES } from './app.routes';

/*MODULOS*/
import { PagesModule } from './pages/pages.module';

/*SERVICIOS*/
import { ServiceModule } from './services/service.module';

/*COMPONENTES*/
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTES,
    ServiceModule,
    PagesModule,
    FormsModule,
    NgbModule,    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
