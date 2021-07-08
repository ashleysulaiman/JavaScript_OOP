console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor (name, pets, residence, hobbies)
    {
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    info() 
    {
        console.log(`${this.name}\n${this.pets}\n${this.residence}\n${this.hobbies}`)
    }
    greeting()
    {
        console.log("Hello!");
    }
    class Coder extends Person 
    {
        constructor(name, pets, residence, hobbies) {
            super(name, pets, residence, hobbies);
            this.occupation = "Full Stack Web Developer";
        }
        greeting()
        {
            console.log("Hello Coder!");
        }
    }

    const Ashley = new Person("Ashley", 0, "Atlanta", "Designing",);
    const Sally = new Coder("Sally", 1, "Georgia", "Reading");
    

console.log(Ashley.info());
console.log(Sally.info());