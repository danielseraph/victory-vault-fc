import { playerStates } from  './playerStates';

export interface Players {
    id: number;
    name: string;
    position: string;
    number: number;
    age: number;
    nationality: string;
    image: string;
    stats:playerStates;
}
