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
        this._userNetworkService.connectionList().subscribe(res => {
            this.data = res.data;
        });
    }
}
