import { PlayerStats } from "./player.stats";

export interface GameDetails {
    id: number;
    date: string;
    homeTeam: string;
    guestTeam: string;
    homeScore: number;
    guestScore: number;
    homeLogo: string;
    guestLogo: string;
    homePlayerStats: PlayerStats[];
    guestPlayerStats: PlayerStats[];
  }
