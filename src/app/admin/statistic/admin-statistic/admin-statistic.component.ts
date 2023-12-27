import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameDetails } from 'src/app/models/game';
import { SignalrService } from 'src/app/services/signalR/signalr.service';
import { StatisticService } from 'src/app/services/statistic/statistic.service';

@Component({
  selector: 'app-admin-statistic',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-statistic.component.html',
  styleUrl: './admin-statistic.component.css'
})
export class AdminStatisticComponent {


  gameData: GameDetails | undefined;
  showHomeStats = true;
  message: string = '';



  constructor(private statisticService: StatisticService,private signalrService: SignalrService) {}

  ngOnInit(): void {
    this.getGameData();
    this.signalrService.getMessage().subscribe((data: string) => {
      this.message = data;
    });

    this.registerOnEvents(); //ovde se registrujem na nove podatke koji stignu zapravo
  }



  getGameData(): void {
    this.statisticService.getGameData(1).subscribe({
      next: (data) => {
        this.gameData=data;
        console.log('Podaci o igri:', data);
        // Ovde možeš dalje manipulisati podacima kako ti odgovara
      },
      error: (error) => {
        console.error('Došlo je do greške prilikom dobijanja podataka o igri:', error);
      }
    });
  }

  showHomeStatistics(): void {
    this.showHomeStats = true;
  }

  showGuestStatistics(): void {
    this.showHomeStats = false;
  }



  getImageUrl(path: string | undefined): string {
  
      return `http://localhost:5053${path}`;
    
  }

  registerOnEvents(){

    console.log("dosla je nova");
    this.signalrService.registerOnServerEvents().subscribe((data: any) => {
      this.gameData = data; // azuriram novu statistiku
      
    });
  }

  updateStat(player: any, statType: string, value: number): void {
    // Kreiraj objekat za ažuriranje statistike
    const updateData = {
      gameId: 1, // Postavi odgovarajući gameId
      playerId: player.playerId,
      type: statType,
      value: value,
      isHomeTeam: this.showHomeStats,
    };
    console.log(updateData);
     this.statisticService.updateGameStatistic(updateData).subscribe({
       next: (response) => {
         console.log('Statistika ažurirana:', response);
    // // //     // Osveži podatke o igri nakon ažuriranja statistike
         this.getGameData();
       },
       error: (error) => {
         console.error('Došlo je do greške prilikom ažuriranja statistike:', error);
       },
   });

  
  

}
}
