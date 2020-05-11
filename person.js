class Person {
    constructor(name,age) {
        this.name = name,
        this.age = age

    }

    greetings(){
        console.log(`Hi my name is ${this.name} and my age is ${this.age}`)
    }

}

module.exports = Person;