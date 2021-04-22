import { Race } from "../races-per-circuit/race";

export class Driver {
    private id: string;
    name: string;
    picture: string;
    age: number;
    teamName: string;
    globalPosition:number;
    races:Race[];
    time:number;

}
