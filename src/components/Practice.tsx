import React from 'react';

class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const lynn = new Human("Lynn", 18, "female")

/*interface Human {
    name: string,
    age: number,
    gender: string
}*/

const person = {
    name: "KyungYeol",
    gender: "male",
    age: 22
}

const sayHi = (person:Human):string => {
    return (`Hellow ${person.name}, you ar ${person.age}, you are a ${person.gender}`)
}

console.log(sayHi(person))
console.log(lynn)

const Practice = () => {
    return (
        <div>

        </div>
    );
};

export default Practice;
