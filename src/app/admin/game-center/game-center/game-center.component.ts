import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameDetails } from 'src/app/models/game';
import { gameManipulation } from 'src/app/models/gameManipulation';
import { GameService } from 'src/app/services/game/game.service';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-game-center',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-center.component.html',
  styleUrl: './game-center.component.css'
})
export class GameCenterComponent {

gameDetails:GameDetails[]=[];
constructor(private gameService:GameService,private teamService:TeamService) {

  
}
ngOnInit(){
 this.gameService.getGames().subscribe( {
  next: (data) => {
    this.gameDetails=data;
  },
  error: (error) => {
    console.error('Error', error);
  }
}        
); ; 
}

createSchedule(gameList:gameManipulation[]){
  //
  console.log("kreiranje rasporeda");
  this.gameService.createSchedule(gameList);
}

getImageUrl(path: string | undefined): string {
  
  return `http://localhost:5053${path}`;

}
onAddGameClick(){
  console.log("kliknuo");
}
}

