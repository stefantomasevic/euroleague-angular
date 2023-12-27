  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { Subscription } from 'rxjs';
  import { GameDetails } from 'src/app/models/game';
  import { SignalrService } from 'src/app/services/signalR/signalr.service';
  import { StatisticService } from 'src/app/services/statistic/statistic.service';

  @Component({
    selector: 'app-statistic',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './statistic.component.html',
    styleUrl: './statistic.component.css',
    
  })


  export class StatisticComponent {
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


      this.signalrService.registerOnServerEvents().subscribe((data: any) => {
        this.gameData = data; // azuriram novu statistiku
        
      });
    }
    
    


  }
