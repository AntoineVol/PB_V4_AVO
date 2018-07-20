import { Component, OnInit } from '@angular/core';
import { Client } from './POJO/client';
import { ClientService } from './Services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listClient:Array<Client>;

  
  constructor(private clientService: ClientService){
    this.listClient=new Array();
  }

  ngOnInit(){
    this.clientService.listClient.subscribe((list)=>this.listClient=list);
    this.clientService.loadMock();
  }
}
