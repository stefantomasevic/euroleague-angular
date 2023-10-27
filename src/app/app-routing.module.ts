import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebLayoutComponent } from './admin/layout/web-layout/web-layout.component';
import { TeamListComponent } from './admin/team-list/team-list/team-list.component';
import { EditTeamComponent } from './admin/edit-team/edit-team.component';
import { AddTeamComponent } from './admin/add-team/add-team.component';
import { TeamPlayersComponent } from './admin/player/team-players/team-players/team-players.component';

const routes: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: TeamListComponent },
      { path: 'add-team', component:AddTeamComponent  },
      { path: 'edit-team/:id', component: EditTeamComponent },
      { path: 'team-players/:id', component: TeamPlayersComponent }
      // Dodaj druge rute kako bi prikazivao druge komponente unutar WebLayoutComponent
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
