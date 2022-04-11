class Car {
    constructor(color, door, wheel, position) {
        this.color = 'red'
        this.door = 4
        this.wheel = 4
        this.position = { x: 0, y: 0 }
    }
    Run({ x, y }) {
        this.position.x += x
        this.position.y += y
        console.log(this.position);
    }
    Drive(step, sec) {
        var self = this
        if (this.driveTimer) {
            clearinterval(this.driveTimer)
        }
        this.driveTimer =
            setInterval(() => {
                self.Run(step)
            }, sec * 1000)
    }
    Stop() {
        clearInterval(this.driveTimer);
        this.position = { x: 0, y: 0 }
        console.log(this.position);
        console.log('Car stop!');
    }
}

class Toyota extends Car {
    constructor(model) {
        super();

        this.model = model
        this.Run = ({ x, y }) => {
            if (x > 0 && y > 0) {
                this.position.x += Math.floor(1.2 * x)
                this.position.y += Math.floor(1.2 * y)
                console.log(this.position);
            } else {
                this.position.x += x
                this.position.y += y
                console.log(this.position);
            }
        }
    }

}

// let benz = new Car('yellow', 4, 4, { x: 0, y: 0 });

// benz.Drive({ x: 1, y: 1 }, 1);

// setTimeout(() => {
//     benz.Stop();
// }, 10000)

let Rav4 = new Toyota('Rav4');

Rav4.Drive({ x: 20, y: 20 }, 1);
setTimeout(() => {
    Rav4.Stop();
}, 10000)





