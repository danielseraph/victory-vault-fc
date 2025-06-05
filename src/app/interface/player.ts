import { playerStats } from  './playerStats';

export interface Player {
    id: number;
    name: string;
    position: string;
    number: number;
    age: number;
    height?: string;
    weight?: string;
    nationality: string;
    image: string;
    bio?:string;
    previousClubs?: string[];
    currentClub?: string;
    joinedDate?: Date;
    contract?:string;
    stats:playerStats;
}
