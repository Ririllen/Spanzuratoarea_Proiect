"use strict";

class Cuvant{
    static extrageCuvantAleatoriu(){
        const cuvinte = ['trandafir','lalea','liliac','narcis','eustoma','ghiocel','cactus','orhidee'];
        return cuvinte[Math.floor(Math.random() * cuvinte.length)];
    };
}

const fillLetterInWord = (position,literaApasata) => {
    let id = 'litera'+position;
    let loc = document.getElementById(id);
    loc.innerHTML = literaApasata.toUpperCase();
    loc.classList.remove('bdr-bottom');
    lungimeCuvantAleatoriu--;     
};

const disableKeyboard = () => {
    document.querySelectorAll('.key').forEach(item => {
    if (item.classList.length === 1){//do this only for those keys that are enabled
        item.classList.add('disable-button'); //disabled button by changing its background-color            
    }}); 
};

let numberLives = 10,
    cuvantAleatoriu = Cuvant.extrageCuvantAleatoriu(),
    lungimeCuvantAleatoriu = cuvantAleatoriu.length,
    word = document.getElementById('word'),
    lives = document.getElementById('lives'),
    restart = document.getElementById('restart');
    
    lives.innerHTML = `You have ${numberLives} lives left`;

// fill empty cells for word
for(let i=0; i<cuvantAleatoriu.length; i++){
    let litera = document.createElement('div');
    litera.classList.add('bg-yellow', 'bdr-bottom');
    litera.id = `litera${i}`;
    word.appendChild(litera);
    };

//process each letter that was clicked
document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        
        let literaApasata = item.id[item.id.length-1];

        // initially, the keys have just one class(.key); when they are disabled, they get one more class
        if (item.classList.length !== 1){ 
            //the button is disabled
            return;
        }    
            
        let position = cuvantAleatoriu.indexOf(literaApasata);

        if (position !== -1){

            let id_key = document.getElementById(item.id);
            id_key.classList.add('disable-button'); //disabled button by changing its background-color           

            // fill in the correct letter, in its position
            fillLetterInWord(position,literaApasata);

            while (position !== -1) {
            position = cuvantAleatoriu.indexOf(literaApasata, position + 1);
            if (position !== -1){
                // fill in the correct letter, in its position
                fillLetterInWord(position,literaApasata);
                };
            }
            
            if (lungimeCuvantAleatoriu === 0){
                if ( numberLives > 0){
                    lives.innerHTML = `WINNER`;
                }

                restart.style.visibility = 'visible';

                // when this happens, disable all keys
                disableKeyboard();
            }

        } else {
        let id_key = document.getElementById(item.id);
        id_key.classList.add('disable-button'); //disabled button by changing its background-color

            if (numberLives - 1 === 0){
                lives.innerHTML = `GAME OVER`;
                restart.style.visibility = 'visible';

                for(let i=0; i<cuvantAleatoriu.length; i++){
                    let idPosition = 'litera'+i;
                    let loc = document.getElementById(idPosition);
                    loc.innerHTML = cuvantAleatoriu[i].toUpperCase();

                    loc.classList.remove('bdr-bottom');
                }

                // when this happens, disable all keys
                disableKeyboard();                    

            } else {
                numberLives--;
                lives.innerHTML = `You have ${numberLives} lives left`;
            }
        }
    })
  });

  restart.addEventListener('click',()=>{
    location.reload();
  });






