import { Component, OnInit } from '@angular/core';
import { UserNetworkService } from '../user-network.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

    data:any;

    constructor(private _userNetworkService: UserNetworkService) {}

    ngOnInit() {
        this.list();
    }

    list() {
        this._userNetworkService.connectionList().subscribe(res => {
            this.data = res.data;
        });
    }

    remove(userId:any)
    {
        var data = {
            receiver_id: userId,
        }
        this._userNetworkService.removeConnection(data).subscribe(res => {
            this.list();
        });
    }
}
