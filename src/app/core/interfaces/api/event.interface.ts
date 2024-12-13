export interface Event {
  eventId: any;
  preventDefault(): unknown;
  _id: string;
  teamA: string;
  teamB: string;
  date: string;
  odds: {
    teamA: number;
    draw: number;
    teamB: number;
  };
}
