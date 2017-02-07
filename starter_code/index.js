const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

// elevator.update();
// elevator.floorUp();
// elevator.log();
// elevator.floorUp();
// elevator.log();
// elevator.floorUp();
elevator.call("Roberto",10,0);
elevator.call("Sergio",10,1);
elevator.update();
