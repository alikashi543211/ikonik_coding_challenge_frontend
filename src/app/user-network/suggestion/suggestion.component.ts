import { Component, OnInit } from '@angular/core';
import { UserNetworkService } from '../user-network.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.css']
})
export class SuggestionComponent implements OnInit {

    data:any;

    constructor(private _userNetworkService: UserNetworkService) {}

    ngOnInit() {
        this.list();
    }

    list()
    {
        this._userNetworkService.suggestionList().subscribe(res => {
            this.data = res.data;
        });
    }

    sendConnectionToUser(userId:any)
    {
        var data = {
            receiver_id: userId,
        }
        this._userNetworkService.sendConnection(data).subscribe(res => {
            this.list();
        });
    }
}
