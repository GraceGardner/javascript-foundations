class Centaur {
  constructor({name:name, type: type}) {
    this.name = name;
    this.breed = type;
    this.cranky = false;
    this.standing = true;
    this.activityCount = 0;
    this.layingDown = false;
  }

  shootBow() {
      this.activityCount ++;
      if (this.cranky = true && this.activityCount > 3) {
        return 'NO!'
      } else if (this.layingDown === true) {
        return 'NO!'
      } else if (this.activityCount === 3){
        this.cranky = true;
        return 'Twang!!!';
      } else if (this.activityCount <3) {
        return 'Twang!!!'
      }
  }

  run() {
    this.activityCount ++;
    if (this.cranky = true && this.activityCount > 3){
      return 'NO!'
    } else if (this.layingDown === true) {
      return 'NO!'
    } else if (this.activityCount === 3){
      this.cranky = true;
      return 'Clop clop clop clop!!!'
    } else if (this.activityCount < 3) {
      return 'Clop clop clop clop!!!'
    }
  }

  sleep() {
    if (this.standing === true) {
      return "NO!"
    } else if (this.standing === false){
      this.cranky = false;
      this.activityCount = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp(){
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing === true){
      this.cranky = false;
      this.activityCount = 0;
    } else if (this.standing === false) {
      return "Not while I'm laying down!";
    }
  }
}

module.exports = Centaur;
