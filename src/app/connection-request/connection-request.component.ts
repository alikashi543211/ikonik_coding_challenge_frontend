import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-request',
  templateUrl: './connection-request.component.html',
  styleUrls: ['./connection-request.component.css']
})
export class ConnectionRequestComponent {
    constructor(private _router:Router) {

    }
    redirectToTab(tab:any)
    {
        console.log("Hello User");
        this._router.navigate(['/connection_request/' + tab]);
    }
}
