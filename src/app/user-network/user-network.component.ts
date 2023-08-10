import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserNetworkService } from './user-network.service';

@Component({
    selector: 'app-user-network',
    templateUrl: './user-network.component.html',
    styleUrls: ['./user-network.component.css']
})
export class UserNetworkComponent {
    suggestionCount = 0;
    sentRequestCount = 0;
    receivedRequestCount = 0;
    connectionListCount = 0;
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _userNetworkService: UserNetworkService) {

    }
    redirectToTab(tab: any) {
        console.log("Hello User");
        this._router.navigate(['/user-network/' + tab]);
    }

    ngOnInit() {
        this._userNetworkService.suggestionList().subscribe(res => {
            this.suggestionCount = res.data.length;
        });

        this._userNetworkService.sentRequestList().subscribe(res => {
            this.sentRequestCount = res.data.length;
        });

        this._userNetworkService.receivedRequestList().subscribe(res => {
            this.receivedRequestCount = res.data.length;
        });

        this._userNetworkService.connectionList().subscribe(res => {
            this.connectionListCount = res.data.length;
        });
    }
}
