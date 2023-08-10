import { Component, OnInit } from '@angular/core';
import { UserNetworkService } from '../user-network.service';

@Component({
  selector: 'app-received-request',
  templateUrl: './received-request.component.html',
  styleUrls: ['./received-request.component.css']
})
export class ReceivedRequestComponent implements OnInit {
    data:any;

    constructor(private _userNetworkService: UserNetworkService) {}

    ngOnInit() {
        this._userNetworkService.receivedRequestList().subscribe(res => {
            this.data = res.data;
        });
    }
}
