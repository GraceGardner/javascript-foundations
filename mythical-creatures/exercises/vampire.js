class Vampire {
  constructor (name, pet){
    this.name = name;
    if (pet === undefined){
      this.pet = "bat";
    } else {
      this.pet = pet;
    }
    this.thirsty = true;
    this.ouncesDrank = 0;
  }

  drink(){
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
    this.ouncesDrank = this.ouncesDrank + 10;
    } else {
      return 'Too full to drink anymore!';
    }
  }
}


module.exports = Vampire;
