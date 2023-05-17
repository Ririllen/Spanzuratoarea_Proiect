const vietiMax = 6; // avem 6 parti are corpului care vor fi afisate,
// reiese ca jucatorul poate avea doar 6 vieti
let vietiRamase = vietiMax;

function displayHangman() {
    const hangmanPartsUsed = vietiMax - vietiRamase;
  
    for (let i = 0; i < hangmanPartsUsed; i++) {
      const hangmanPartId = ['cap', 'trunchi', 'mana-stanga', 'mana-dreapta', 'picior-stang', 'picior-drept'][i];
      const hangmanPart = document.getElementById(hangmanPartId);
      hangmanPart.classList.remove('hidden');
    }
  }