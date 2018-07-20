import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../POJO/client';
import { environment as ENV} from '../../environments/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private subject: BehaviorSubject<Array<Client>>;
  constructor(private httpClient : HttpClient) { 
    this.subject = new BehaviorSubject(new Array<Client>());
  }

  get listClient(){
    return this.subject.asObservable();
  }

  loadMock(){
    console.log("loadMock");
    
    this.httpClient.get<Array<Client>>(ENV.mockClientUrl).subscribe((list)=>this.subject.next(list))
  }
}
