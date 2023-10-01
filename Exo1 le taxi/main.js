// --------------------------------------------------------------------------------
// --------------------------------- Le Taxi --------------------------------------
// --------------------------------------------------------------------------------
// Les variables :

let music = ["Wejdene - Anissa","test1","test2","test3","test4"] // les musiques
let nbLightRed = 0 // nombre de feu rouge
let nbTaxi = 0 // nombre de taxi
let x ="er" // pour la cohérence de la phrase (ligne 51)

// --------------------------------------------------------------------------------

// les fonctions : 

  // fonction random :

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

  // fonction pour trouver la taille d'une liste :

function lenght(x){
  a=0
  x.forEach(element => {
    a+=1
  })
  if (a==1) {
    return 0
  }
  return a
}

// --------------------------------------------------------------------------------
// Les Class :

class character{
  constructor(name,hp){
      this.name = name
      this.hp = hp
  }

  traject(){
    while (nbLightRed<30 && this.hp>0) {  
      nbLightRed+=1
      if (music[getRandomInt(lenght(music))]=="Wejdene - Anissa") {
        nbTaxi+=1
        this.hp-=1
        if (nbTaxi>1) {
           x = "ème"
        } 
        console.log(`${this.name} en est a son ${nbTaxi}${x} TAXI et possède ${this.hp} hp`)
      } else {
        console.log(`le trajet continue, feu numéro :${nbLightRed}`)
      }
    }
    if (nbLightRed<30) {
      console.log(`${this.name} à explosé : `)
      console.log(`explosion`)
    } else {
      console.log("gangé")
    }
  }
}

// --------------------------------------------------------------------------------

//Les tests :
//let john = new character("john",10)
//john.traject()