import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserNetworkRoutingModule } from './user-network-routing.module';
import { ConnectionComponent } from './connection/connection.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ReceivedRequestComponent } from './received-request/received-request.component';
import { SentRequestComponent } from './sent-request/sent-request.component';
import { UserNetworkComponent } from './user-network.component';


@NgModule({
    declarations: [
        ConnectionComponent,
        SuggestionComponent,
        ReceivedRequestComponent,
        SentRequestComponent,
        UserNetworkComponent
    ],
    imports: [
        CommonModule,
        UserNetworkRoutingModule
    ]
})
export class UserNetworkModule { }
