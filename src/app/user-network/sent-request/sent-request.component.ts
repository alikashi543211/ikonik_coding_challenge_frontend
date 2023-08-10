import { Component, OnInit } from '@angular/core';
import { UserNetworkService } from '../user-network.service';

@Component({
  selector: 'app-sent-request',
  templateUrl: './sent-request.component.html',
  styleUrls: ['./sent-request.component.css']
})
export class SentRequestComponent implements OnInit {
    data:any;

    constructor(private _userNetworkService: UserNetworkService) {}

    ngOnInit() {
        this._userNetworkService.sentRequestList().subscribe(res => {
            this.data = res.data;
        });
    }
}
