import { HairColor } from "../enums/Enums";

export interface PersonProp {
    name: string;
    age: number;
    email: string;
    hairColor: HairColor,
}

export interface Student {
    class: string;
    fee: number;
    grades: string;
}