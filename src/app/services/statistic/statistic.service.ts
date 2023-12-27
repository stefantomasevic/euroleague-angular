import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerStatsUpdate } from 'src/app/models/playerStatsUpdate';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  private apiUrl = 'http://localhost:5053/api';

  constructor(private http: HttpClient) { }

  getGameData(id:number): Observable<any> {
    const endpoint = `${this.apiUrl}/Game/${id}`;
    return this.http.get(endpoint);
  }
  updateGameStatistic(playerStatistic:PlayerStatsUpdate){
    const endpoint = `${this.apiUrl}/Statistic/UpdateStatistic`;
    return this.http.post<PlayerStatsUpdate>(endpoint, playerStatistic);
  }





}
