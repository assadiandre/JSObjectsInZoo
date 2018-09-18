
var animalPopulation = 0;

class Animal {

    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log( this.name  + " sleeps for 8 hours" ) ;
    }

    eat( food ) {
        console.log(this.name + " eats " + food);
        (food == this.favoriteFood)? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep() ;
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }
}


class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log( this.name  + " hybernates for 4 months" ) ;
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log( this.name  + " sleeps in a cloud" ) ;
    }

}

class Giraffe extends Animal {

    constructor(name) {
        super(name, "leaves");
    }

    eat( food ) {
        console.log(this.name + " eats " + food);
        (food == this.favoriteFood)? console.log("YUM!!! " + this.name + " wants more " + food) : console.log("YUCK!!! " + this.name + " will not eat " + food)   ;
    }


}

class Bee extends Animal {

    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        return this.name + " never sleeps";
    }

    eat( food ) {
        console.log(this.name + " eats " + food);
        (food == this.favoriteFood)? console.log("YUM!!! " + this.name + " wants more " + food) : console.log( "YUCK!!! " + this.name + " will not eat " + food ) ;
    }


}


class Zookeeper {


    constructor(name) {
        self.name = name;
    }

    feedAnimals(animals, food) {
        console.log(self.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " total animals." );
        for (var i = 0; i < animals.length; i++) {
            animals[i].eat(food);
        }

    }

}


function run() {
    var Zoebot = new Zookeeper("Zoebot");
    Zoebot.feedAnimals( [new Tiger("Tiger"),new Bear("Bear"), new Unicorn("Unicorn"), new Giraffe("Giraffe"), new Bee("Bee")  ] , "meat");
}

