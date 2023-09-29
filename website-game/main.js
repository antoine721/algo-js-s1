function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var nb = 0
var gagné = 0
var perdu = 0
var nule =0

document.getElementById('pierre').addEventListener('click', function() {
    var input = this.id;
    getValue(input)
    
  });

  document.getElementById('feuille').addEventListener('click', function() {
    var input = this.id;
    getValue(input)
  });

  document.getElementById('ciseaux').addEventListener('click', function() {
    var input = this.id;
    getValue(input)
  });


function getValue(input) {
    nb+=1
    var liste = ["pierre","feuille","ciseaux"]
    var enemie = liste[getRandomInt(3)]
    if(input==enemie) {
        var element = document.getElementById('txtc');
        element.textContent = `vous avez tous les deux fais ${input} égalité`;
        var element = document.getElementById('compteur');
        element.textContent = `partie joué : ${nb}`;
        nule+=1
        var element = document.getElementById('nul');
        element.textContent = `partie nul : ${nule}`;
    } else {
        if (input=="pierre"){
            if (enemie=="feuille"){
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais feuille et vous avez perdu";
                perdu+=1
            } else {
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais ciseaux et vous avez gagné";
                gagné+=1
            }
        }
        if (input=="feuille"){
            if (enemie=="ciseaux"){
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais ciseaux et vous avez perdu";
                perdu+=1
            } else {
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais pierre et vous avez gagné";
                gagné+=1
            }
        }
        if (input=="ciseaux"){
            if (enemie=="pierre"){
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais pierre et vous avez perdu";
                perdu+=1
            } else {
                var element = document.getElementById('txtc');
                element.textContent = "l'adversaire à fais feuille et vous avez gagné";
                gagné+=1
            }
        }
        var element = document.getElementById('compteur');
        element.textContent = `partie joué : ${nb}`;
        var element = document.getElementById('gagne');
        element.textContent = `partie gagné : ${gagné}`;
        var element = document.getElementById('perd');
        element.textContent = `partie perdu : ${perdu}`;
    } 
}
    

