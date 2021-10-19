class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    if (home === undefined){
      this.home = 'Beyond the Wall';
    } else {
      this.home = home;
    }
    if (size === undefined){
      this.size = 'Massive';
    } else {
      this.size = size;
    }
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2){
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark){
    this.starksToProtect = [];
    stark.safe = false;

  }
}
module.exports = Direwolf;
