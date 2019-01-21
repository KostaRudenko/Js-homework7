class Person {
    constructor (name = '', age = 0, sex = 'M', weight = 0, height = 0 ) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.weight = weight;
        this.height = height;

        this.DNI;
    }
    calculateIMC() {
        let imc = (this.weight / (this.height * this.height)) * 703;

        if (imc < 20) {
            return -1;
        } else if (imc > 20 && imc <= 25) {
            return 0;
        } else {
            return 1;
        }
    }
    isAdult() {
        if (this.age < 18) {
            return 0;
        }
        return 1;
    }
    checkSex(sex) {
        if (this.sex === sex) {
             this.sex = 'M'
        } else if (this.sex === 'F') {
             this.sex = 'F';
        } else {
            this.sex = 'M'
        }
        
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Sex: ${this.sex}, Weight: ${this.weight}, Height: ${this.height}`;
    }
    createDNI() {
        return this.DNI = Math.floor(Math.random() * 100000000);
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }

    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }

    get sex() {
        return this._sex;
    }
    set sex(newSex) {
        this._sex = newSex;
    }

    get weight() {
        return this._weight;
    }
    set weight(newWeight) {
        return this._weight = newWeight;
    }

    get height() {
        return this._height;
    }
    set height(newHeight) {
        return this._height = newHeight;
    }
}

let user = new Person ('Kosta', 20, 30, 78, 183);

user.checkSex();

console.log(user.toString());