import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-user-network',
    templateUrl: './user-network.component.html',
    styleUrls: ['./user-network.component.css']
})
export class UserNetworkComponent {
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {

    }
    redirectToTab(tab: any) {
        console.log("Hello User");
        this._router.navigate(['/user-network/' + tab]);
    }
}
