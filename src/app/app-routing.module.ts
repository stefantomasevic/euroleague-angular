import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './admin/layout/web-layout/web-layout.component';
import { TeamListComponent } from './admin/team-list/team-list/team-list.component';
import { EditTeamComponent } from './admin/edit-team/edit-team.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';
import { TeamPlayersComponent } from './admin/player/team-players/team-players/team-players.component';
import { StatisticComponent } from './web/statistic/statistic/statistic.component';
import { CommonModule } from '@angular/common';
import { AdminStatisticComponent } from './admin/statistic/admin-statistic/admin-statistic.component';
import { GameCenterComponent } from './admin/game-center/game-center/game-center.component';
import { AddGameComponent } from './admin/add-game/add-game/add-game.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: TeamListComponent },
      { path: 'add-team', component:AddTeamComponent  },
      { path: 'edit-team/:id', component: EditTeamComponent },
      { path: 'team-players/:id', component: TeamPlayersComponent },
      
      { path: 'statistic/:id', component: StatisticComponent},
      { path: 'admin-statistic/:id', component: AdminStatisticComponent},
      { path: 'game-center', component: GameCenterComponent},
      { path: 'add-game', component: AddGameComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
