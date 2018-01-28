class Training {
    constructor(name, type) {
        this.type = type;
        this.name = name;
        
    }

    getType() {
        return this.type;
    }

    getName() {
        return this.name;
    }

}

/*const training = new Training('websamuraj', 'react');
console.log(training.getType());*/

class React extends Training {
    constructor(name) {
        super(name, 'react');

        this.date = null;
    }

    setDate(date) {
        this.date = date;
    }

    getDate() {
        return this.date;
    }

    getFullName() {
        return `${this.getName()} - ${this.getType()}: ${this.getDate()}`;
    }
}

const react = new React('websamuraj');
react.setDate('27.01.2018');
console.log(react.getFullName());