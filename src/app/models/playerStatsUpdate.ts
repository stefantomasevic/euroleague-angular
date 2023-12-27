export interface PlayerStatsUpdate {
    gameId: number;
    playerId: string;
    type: string;
    value: number;
    isHomeTeam:boolean;
  }