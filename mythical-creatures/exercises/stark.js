const Direwolf = require('../exercises/direwolf')

class Stark {
  constructor({name: name, area: location}){
    this.name = name;
    if (location === undefined){
      this.location = 'Winterfell';
    } else {
      this.location = location;
    }
    this.safe = false;
  }

  sayHouseWords(){
    if (this.safe === false){
      return 'Winter is Coming';
    } else if (this.safe = true){
      return 'The North Remembers';
    }
  }

  callDirewolf(name, home){
    var newWolf = new Direwolf(name, home)
    newWolf.home = this.location
    newWolf.protect(this)
    return newWolf
  }
}
module.exports = Stark;
