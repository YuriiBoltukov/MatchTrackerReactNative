export enum MatchStatus {
  Finished = 'Finished',
  Scheduled = 'Scheduled',
  Ongoing = 'Ongoing',
}

export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: MatchStatus;
  time: string;
  title: string;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export type Player = {
  username: string;
  kills: number;
};
