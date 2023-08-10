import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { SentRequestComponent } from './sent-request/sent-request.component';
import { ReceivedRequestComponent } from './received-request/received-request.component';
import { ConnectionComponent } from './connection/connection.component';
import { UserNetworkComponent } from './user-network.component';

const routes: Routes = [
    { path: '', component: UserNetworkComponent, children: [
        { path: 'suggestions', component: SuggestionComponent },
        { path: 'sent-requests', component: SentRequestComponent },
        { path: 'received-requests', component: ReceivedRequestComponent },
        { path: 'connections', component: ConnectionComponent },
    ]},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserNetworkRoutingModule { }
