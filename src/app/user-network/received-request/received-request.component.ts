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
        this.list();
    }

    list()
    {
        this._userNetworkService.receivedRequestList().subscribe(res => {
            this.data = res.data;
        });
    }

    accept(userId:any)
    {
        var data = {
            receiver_id: userId,
        }
        this._userNetworkService.acceptConnection(data).subscribe(res => {
            this.list();
        });
    }
}
