import { Component } from '@angular/core';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent {

 
  constructor(private playerService:PlayerService) {
    
  }

  ngOnInit(): void {

    this.getPlayersByTeamId(1);
  }

  getPlayersByTeamId(id:number){

    this.playerService.getPlayersByTeamId(id).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.error('Došlo je do greške prilikom dobijanja igrača:', error);
      }
    );
  }

}
