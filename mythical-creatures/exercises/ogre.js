

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

    }

    swingAt(human) {
        this.swings ++;
        // if (this.swings == 2) {
        //   human.knockedOut = true;
        // }
    }
}

module.exports = Ogre;
