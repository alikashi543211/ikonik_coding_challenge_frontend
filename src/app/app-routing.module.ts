import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { EventsComponent } from './events/events.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionRequestComponent } from './connection-request/connection-request.component';
import { NetworkConnectionComponent } from './network-connection/network-connection.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'special',
        component: SpecialEventsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'connection_request',
        component: ConnectionRequestComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'connection_request/connections',
        component: NetworkConnectionComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'user-network',
        loadChildren: () => import('./user-network/user-network.module').then(m => m.UserNetworkModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
