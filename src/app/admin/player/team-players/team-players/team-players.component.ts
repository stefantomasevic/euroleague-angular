import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player/player.service';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.css']
})
export class TeamPlayersComponent {

  players: Player[] = [];
  teamId:number=0;
  constructor(private playerService:PlayerService, private route:ActivatedRoute) {
    
  }

  ngOnInit(): void {

    this.teamId = this.route.snapshot.params['id'];
    console.log(this.teamId); // Dobijanje vrednosti parametra 'id' iz rute
    this.getPlayersByTeamId(this.teamId);
  }

  
  getPlayersByTeamId(id: number) {
    this.playerService.getPlayersByTeamId(id).subscribe({
      next: (data) => {
        console.log(data);
        this.players = data;
        console.log(this.players[0].imagePath);
      },
      error: (error) => {
        console.error('Došlo je do greške prilikom dobijanja igrača:', error);
      }
    });

  }

  getImageUrl(imagePath: string): string {
    // Dodajte dinamički deo putanje ovde
    return `http://localhost:5053/${imagePath}`;
  }

}
