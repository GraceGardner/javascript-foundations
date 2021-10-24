class Fairy {
  constructor(name){
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = "Good natured"
    this.humanWards = []
  }

  receiveBelief(){
    this.dust ++
  }

  believe(){
    this.dust = this.dust + 10
  }

  makeDresses(newDresses){
    for (var i = 0; i < newDresses.length; i++){
      this.clothes.dresses.push(newDresses[i])
    }
  }

  becomeProvoked(){
    this.disposition = "Vengeful"
  }

  replaceInfant(infant){
    var stolenInfant = infant
    if (this.disposition === "Vengeful"){
      this.humanWards.push(stolenInfant)
      infant.disposition = 'Malicious'
      if (this.humanWards.length = 3){
        this.disposition = "Good natured"
      }
    }
    return infant
    }
  }




module.exports = Fairy;
