import { Race } from "./race";

export class Driver {
    _id: string;
    name: string;
    picture: string;
    age: number;
    teamName: string;
    globalPosition:number;
    races:Race[];
    time:number;

}
