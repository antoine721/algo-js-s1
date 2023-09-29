class Pokemon {
    constructor(name, attack, defense,hp, luck, crit,type1,type2) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
        this.crit = crit
        this.type1 = type1
        this.type2 = type2 
    }
    islucky(){
        const randomNumber = Math.random();
        return (randomNumber<this.luck)

    }
    attackPokemon(pokemon){   
        if (pokemon.islucky()){
            pokemon.hp -= this.attack + (pokemon.coupcritique()) - pokemon.defense
            console.log(`${pokemon.name} à réussi son attaque`)
        } else {
            console.log(`${pokemon.name} à raté son attaque, oh le nul`)
        }
    }
    coupcritique(){
        const randomNumber = Math.random();
        if (randomNumber<this.crit){
            console.log(`${this.name} : COUP CRITIQUE`)
            return(this.attack)
        } else {
            return(0)
        }        
    }
}

let Pikachu = new Pokemon("Pikachu", 8, 5, 100, 0.8, 0.2)
let Salameche = new Pokemon("Salameche", 10, 3, 110, 0.8, 0.2)
let Bulbizarre = new Pokemon("Bulbizarre", 10, 3, 110, 0.8, 0.2)
let Carapuce = new Pokemon("Carapuce", 10, 3, 110, 0.8, 0.2)



combat(Pikachu,Salameche)

function combat(a,b) {
    var tour = 0
    while ((a.hp>0) && (b.hp>0)) {
        tour+=1
        a.attackPokemon(b)
        if (b.hp<=0){
            console.log(`${b.name} est mort '(, ${a.name} à gagné`)
        } else {
            b.attackPokemon(a)
            if (a.hp<=0){
                console.log(`${a.name} est mort '(, ${b.name} à gagné`)
            } else {
                console.log(`Nous sommes au tour :${tour} ${a.name} possède ${a.hp} hp et ${b.name} possède ${b.hp} hp, le combat fais rage qui en sortira vainqueur ?`)
            }
        }
    }
}

//eau : eau*1/2 |  electricité*1 | feu*2 | plante*1/2
//electricité : eau*2 |  electricité*1/2 | feu*1 | plante*1/2
//feu : eau*1/2 |  electricité*1/2 | feu*1/2 | plante*2
//plante : eau*2 |  electricité*1/2 | feu*1 | plante*1/2



