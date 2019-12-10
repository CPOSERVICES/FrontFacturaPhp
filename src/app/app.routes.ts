import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';

const appRoutes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'logout/:sure', component: LoginComponent},
    { path: '**', component: PagenofoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes );
