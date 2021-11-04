class Human{
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.notices = false;
    this.ogre = null;
    this.knockedOut = false;
  }

  noticesOgre(){
    if (this.encounterCounter == 3){
      this.encounterCounter = 0;
      this.notices = true;
    } else if (this.encounterCounter < 3){
      this.notices = false;
    }
    return this.notices;
  }

}


module.exports = Human;
