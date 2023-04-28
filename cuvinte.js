class Cuvant{

    #cuvinte = ['trandafir','lalea','liliac','narcis','eustoma','asdfghjklpoiu'];

    extrageCuvantAleatoriu(){
        return this.#cuvinte[Math.floor(Math.random() * this.#cuvinte.length)];
    };
}



let cuvant = new Cuvant();
let cuvantAleatoriu = cuvant.extrageCuvantAleatoriu();

let word = document.getElementById('word');


// fill empty cells for word
for(let i=0; i<cuvantAleatoriu.length; i++){
    let litera = document.createElement('div');
    litera.classList.add('bg-yellow', 'bdr-bottom');
    litera.id = `litera${i}`;
    // litera.innerText = cuvantAleatoriu[i].toUpperCase();
    word.appendChild(litera);
}



document.querySelectorAll('.key').forEach(item => {
    item.addEventListener('click', event => {
        
        let literaApasata = item.id[item.id.length-1];

        if (item.classList.length === 1){ //the button is not disabled
            
            let position = cuvantAleatoriu.indexOf(literaApasata);

            if (position !== -1){

                let id_key = document.getElementById(item.id);
                id_key.classList.add('disable-button');            

                let id = 'litera'+position;
                
                let loc = document.getElementById(id);
                loc.innerHTML = literaApasata.toUpperCase();
                loc.classList.remove('bdr-bottom');


                while (position !== -1) {
                position = cuvantAleatoriu.indexOf(literaApasata, position + 1);
                if (position !== -1){
                        id = 'litera'+position;
                        loc = document.getElementById(id);
                        loc.innerHTML = literaApasata.toUpperCase();

                        loc.classList.remove('bdr-bottom');
                    };
        
                }
            } else {
            let id_key = document.getElementById(item.id);
            id_key.classList.add('disable-button');
            }
        }//the button is not disabled

    })
  })






