import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDetails } from 'src/app/models/game';
import { gameManipulation } from 'src/app/models/gameManipulation';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'http://localhost:5053/api';

  constructor(private http: HttpClient) { }

getGames(): Observable<GameDetails[]>{
  return this.http.get<GameDetails[]>(`${this.apiUrl}/game`);
}

createSchedule(gameList:gameManipulation[]){

  return this.http.post<gameManipulation>(`${this.apiUrl}/game/CreateSchedule`, gameList);
}

}
