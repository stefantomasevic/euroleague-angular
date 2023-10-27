import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from 'src/app/models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:5053/api/Player';


  constructor(private http: HttpClient) { }


  getPlayersByTeamId(teamId:number):Observable<Player[]>{

    return  this.http.get<Player[]>(`${this.apiUrl}/team/${teamId}`);

  }
}
