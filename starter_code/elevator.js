class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.idle       = true;
    this.direcction = "up";
    this.waitingList = [];
    this.passangers= [];
    this.currentReq= [];
  }

  start() {
      setInterval(
    this.update.bind(this),1000);
          }

  stop() {
    clearInterval(this.start());
         }


  update() {
  this.log();
if (this.request.length !== 0){}
  // var nextfloor = this.requests[1];
  console.log(this.requests);
  console.log(this.waitingList);
  // var destino = this.requests.filter(function(currentValue,index) {
  // return (index+2)%3 === 0 ;
          }


  _passengersEnter() {

                      }

  _passengersLeave() {

                      }

  floorUp() { if (this.floor < this.MAXFLOOR){
  this.floor ++;
  console.log (this.floor);}
            }

  floorDown() { if (this.floor > 0)
  {this.floor --;
  console.log (this.floor);}
              }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    this.request= _.sortBy(_.uniq(this.request))

   }

  log() {
  console.log('this.floor,this.direcction');}

}
module.exports = Elevator;
