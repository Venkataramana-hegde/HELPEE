type genders = "male" | "female";
type tuple = [string, genders, number, "ok"];
const tupleEx: tuple = ["ok", "male", 7, "ok"];



type Sins = "greed" | "wrath" | "glutton" | "pride" | "envy"
const sin:  Sins = "greed";
const sin_list: Sins[] = ["greed", "pride", "envy"]



interface Dog {
    age: number;
    name: string;
    broCode: false;
    barks: () => boolean
}

const dog: Dog = {
    age:7,
    name: "Tommy",
    broCode: false,
    barks: () => true
}



//Unions
interface bro1 {
    name1: string;
}
interface bro2 {
    name2: string;
    name3: string;
}
type Bros = bro1 | bro2;



interface Data<T> {
    name: string,
    alive: T
}

let dataEx: Data<boolean> = {
    name: "venkat",
    alive: true
}
