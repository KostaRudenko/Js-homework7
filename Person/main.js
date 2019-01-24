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

class Execute {
    static run() {
        this.users = [];

        let user = new Person('Kosta', 29, 'M', 79, 183);
        let user2 = new Person('Olly', 28, 'F');
        let user3 = new Person();

        this.users.push(user, user2, user3);

        let showAllInfo = () => {
            this.users.forEach((e) => {
                if(!e.name) {
                    e.name = 'unknown';
                }

                let info = () => {
                    console.log(e)
                }
                let checkAdult = () => {
                    if (e.isAdult()) {
                        console.log(`${e.name} is an adult`)
                    } else {
                        console.log(`${e.name} is not an adult`);
                    }
                }
                let checkWeight = () => {
                    if (e.calculateIMC() === 1) {
                        console.log(`${e.name} your weight is overweight`);
                    } else if (e.calculateIMC() === -1) {
                        console.log(`${e.name} your weight is underweight`);
                    } else {
                        console.log(`${e.name} your weight is normal`);
                    }
                }
                info();
                checkAdult();
                checkWeight();
            });
        }
        showAllInfo();
    }
}
Execute.run()