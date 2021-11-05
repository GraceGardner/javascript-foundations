

class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    if (ogre.abode){
      this.home = ogre.abode;
    } else {
      this.home = 'Swamp';
    }
    this.swings = 0;
  }


    encounter(human) {
      human.encounterCounter ++;
      if (human.encounterCounter % 3 == 0){
        this.swings ++;
      } if (this.swings == 2) {
        human.knockedOut = true;
      }
    }

    swingAt(human) {
      this.swings++
    }

    apologize(human) {
      human.knockedOut = false;
    }
}

module.exports = Ogre;
