import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TeamService } from 'src/app/services/team/team.service';

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.css'
})
export class AddGameComponent {

  gameForm!: FormGroup;
  teams: Team[] = [];

  constructor(private fb: FormBuilder, private teamService: TeamService) {}

  ngOnInit() {
    this.getTeams();
    this.initializeForm();
  }

  private initializeForm() {
    this.gameForm = this.fb.group({
      games: this.fb.array([this.createGameGroup()])
    });
  }

  private createGameGroup() {
    return this.fb.group({
      homeTeam: [null, Validators.required],
      guestTeam: [null, Validators.required],
      date: [null, Validators.required]
    });
  }

  onSubmit() {
    console.log(this.gameForm.value);
  }

  getTeams() {
    this.teamService.getTeams().subscribe({
      next: (data) => {
        this.teams = data;
        console.log("doslo")
      },
      error: (error) => {
        console.error('Error fetching teams:', error);
      }
    });
  }

  addNewGame() {
    const newGameGroup = this.createGameGroup();
    this.gamesFormArray.push(newGameGroup);
  }

  get gamesFormArray() {
    return (this.gameForm.get('games') as FormArray).controls as FormGroup[];
  }

  onHomeTeamChange(index: number) {
    const gamesFormArray = this.gameForm.get('games') as FormArray;
    const guestTeamControl = gamesFormArray.at(index).get('guestTeam');
    const homeTeamControl = gamesFormArray.at(index).get('homeTeam');

    if (homeTeamControl && guestTeamControl) {
      if (homeTeamControl.value === guestTeamControl.value) {
        homeTeamControl.disable();
        guestTeamControl.disable();
      } else {
        homeTeamControl.enable();
        guestTeamControl.enable();
      }
    }
  }

}
