import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder, Subject } from '@microsoft/signalr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {
  private hubConnection: HubConnection;
  
  private messageReceived = new BehaviorSubject<string>('');
  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('http://localhost:5053/gamehub')  // Prilagodi URL-u tvom SignalR hub-u
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('SignalR Connected!');
        this.registerOnServerEvents();
      })
      .catch((err) => console.log('Error while starting SignalR: ' + err));
  }

  public registerOnServerEvents(): Observable<any> {
    const observable = new Observable((observer) => {
      this.hubConnection.on('ReceiveStatistic', (data: any) => {
        console.log('Statistic updated: ', data);
        observer.next(data);
      });
    });
  
    return observable;
  }

  public getMessage(): Observable<string> {
    return this.messageReceived.asObservable();
  }
  
}
