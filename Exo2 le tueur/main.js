// --------------------------------------------------------------------------------
// --------------------------------- Le sérial killer -----------------------------
// --------------------------------------------------------------------------------
// Les variables :

let survivorList = []
let nameSurv = ""
let listDead = []

// --------------------------------------------------------------------------------

// les constantes :

const survivorFirstNames = ["Alice", "Bob", "Charlie", "Eva", "Frank", "Grace", "Hannah", "Isaac", "Julia", "Kai"]
const hairColors = ["Black", "Brown", "Blond", "Red", "Brunette", "White", "Gray", "Blue", "Green", "Pink"]
const physicalTraits = ["Scar on the face", "Tattoo on the arm", "Heterochromia (different colored eyes)", "Bump on the nose", "Bow-legged", "Artificial left hand", "Birthmark on the cheek", "Thick beard", "No physical trait"]
const mentalCharacteristics = ["Intelligent", "Sociable", "Introverted", "Empathetic", "Aggressive", "Calm", "Creative", "Ambitious", "Patient", "Stressed"]
const heights = ["Short", "Medium", "Tall", "Very Tall", "Dwarf", "Giant", "Normal", "Slender"];

// --------------------------------------------------------------------------------

// les Fonctions : 

  // fonction random :

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

  // fonction pour trouver la taille d'une liste :

function placementElement(x){
    a=0
    x.forEach(element => {
        a+=1
    })
    if (a==1) {
        return 0
    }
    return a
}

function lenght(x){
    a=0
    x.forEach(element => {
        a+=1
    })
    return a
}

// --------------------------------------------------------------------------------

// les class :

class killer{
    constructor(name,hp){
        this.name=name
        this.hp=hp

    }
}

class survivor {
    constructor(name,hp,probaDead,proDamage,proDamageWhenDead,characteristicHairColors,characteristicPhysicalTraits,characteristicMental,characteristicHeights){
        this.name=name
        this.hp=hp
        this.probaDead=probaDead
        this.proDamage=proDamage
        this.proDamageWhenDead= proDamageWhenDead
        this.characteristicHairColors = characteristicHairColors
        this.characteristicPhysicalTraits = characteristicPhysicalTraits
        this.characteristicMental = characteristicMental
        this.characteristicHeights = characteristicHeights
    }
    
}

let jason = new killer("jason",100)

// générer les survivants

for (let i = 0; i < 5; i++) {
    nameSurv = survivorFirstNames[getRandomInt(placementElement(survivorFirstNames))]
    let newSurvivor = new survivor(nameSurv,true,0.3,0.5,0.2,hairColors[getRandomInt(placementElement(hairColors))],physicalTraits[getRandomInt(placementElement(physicalTraits))],mentalCharacteristics[getRandomInt(placementElement(mentalCharacteristics))],heights[getRandomInt(placementElement(heights))])
    survivorList.push(newSurvivor)
}
console.log("voilà les survivant : ")
survivorList.forEach(element => {    
    console.log(`${element.name}, ${100-getRandomInt(80)} year , hair : ${element.characteristicHairColors}, physicalTraits : ${element.characteristicPhysicalTraits} , characteristicMental : ${element.characteristicMental} , Heights : ${element.characteristicHeights}`)
    console.log("")
})

while (lenght(survivorList)>0 && jason.hp>0) {    
    const nbrRandom = Math.random()

    if (nbrRandom>=0 && nbrRandom<survivorList[0].probaDead ) {
        survivorList[0].hp=false
        console.log(`${survivorList[0].name} est mort par jason`)
    } else {
        if (nbrRandom>=survivorList[0].probaDead && nbrRandom<(survivorList[0].proDamage+survivorList[0].probaDead)) {
            console.log(`${survivorList[0].name} esquive, et inflige 10 hp au tueur`)
            jason.hp-=10
        } else {
            console.log(`${survivorList[0].name} est mort par jason, mais inflige 15 hp au tueur`)
            jason.hp-=15
            survivorList[0].hp=false
        }
    }
    if (survivorList[0].hp==false) {
        listDead.push(survivorList[0].name)
        survivorList.shift()
    }
    if (jason.hp<=0) {
        console.log("le tueur est mort")
        console.log(`il reste ${lenght(survivorList)} survivant`)
        
    }else {
        console.log(`il reste ${lenght(survivorList)} survivant, jason à ${jason.hp} hp`)
    }
    
    
    
}

if (lenght(survivorList)==0 && jason.hp>0) {
    console.log("Jason à tuer tout les survivants")
}

if (jason.hp==0 && lenght(survivorList)==0) {
    console.log("Jason à tuer tout les survivants mais il est mort")
}
console.log("jason à tuer :")
listDead.forEach(element => {
    console.log(element)
})



// --------------------------------------------------------------------------------