//write a "person" class to hold all the details


class Person {

    constructor(firstName, age, gender) {
      
    this.firstName = firstName;
    this.age = age;
    this.gender = gender;
        
  }

    getName() {
      
      return `${this.firstName}`;
      
  }

    isAdult() {
      
        return this.age >= 25;
        
    }

    greet(Person) {

        return `Hello MR, ${Person.getName()}! this is ${this.getName()}, You are now eligibile to apply for the student loan.`;
        
  }
    
}

let Person1 = new Person("Raj",  28, "Male");
let Person2 = new Person("sindhu", 22 , "Female");

console.log("Person 1 Name:", Person1.getName());

console.log("Person 1 Is Adult?", Person1.isAdult());

console.log("Person 2 Name:", Person2.getName());

console.log("Person 2 Is Adult?", Person2.isAdult());

console.log(Person2.greet(Person1));