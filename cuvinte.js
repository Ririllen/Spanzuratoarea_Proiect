class Cuvant{

    #cuvinte = ['trandafir','lalea','liliac','narcis','eustoma','asdfghjklpoiu'];

    extrageCuvantAleatoriu(){
        return this.#cuvinte[Math.floor(Math.random() * this.#cuvinte.length)];
    };
}



let cuvant = new Cuvant();
let cuvantAleatoriu = cuvant.extrageCuvantAleatoriu();
// let cuvantAleatoriu = 'WMAWUM';

let word = document.getElementById('word');


// fill empty cells for word
for(let i=0; i<cuvantAleatoriu.length; i++){
    let litera = document.createElement('div');
    litera.classList.add('bg-yellow', 'bdr-bottom');
    litera.id = `litera${i}`;
    // litera.innerText = cuvantAleatoriu[i].toUpperCase();
    word.appendChild(litera);
}

let adaugaLitera = document.getElementById('adauga-litera');

adaugaLitera.addEventListener('click', ()=>{    
        let literaTemp = 'W';
        
        let position = cuvantAleatoriu.indexOf(literaTemp);
        let id = 'litera'+position;
        
        let loc = document.getElementById(id);
        loc.innerHTML = literaTemp.toUpperCase();
        loc.classList.remove('bdr-bottom');


        while (position !== -1) {
          position = cuvantAleatoriu.indexOf(literaTemp, position + 1);
          if (position !== -1){
                id = 'litera'+position;
                loc = document.getElementById(id);
                loc.innerHTML = literaTemp.toUpperCase();

                loc.classList.remove('bdr-bottom');
            };
  
        }
});






// for(let i=0; i<cuvantAleatoriu.length; i++){
//     let litera = document.createElement('div');
//     litera.classList.add('bg-yellow', 'bdr-bottom');
//     litera.innerText = cuvantAleatoriu[i].toUpperCase();
//     word.appendChild(litera);
// }




