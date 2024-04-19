
const porte1 = document.getElementById('porte1');
const porte2 = document.getElementById('porte2');
let les_etages = document.querySelector('.les_etages');
let btn = document.querySelectorAll('.btn')
let Elevator = document.querySelector('.Elevator')
let start = document.querySelector('.start')
let n_step=document.querySelector(".n_step")
let reset=document.querySelector('.reset')
let is_move;
let t = 2;

let i = 0;
let f = [];
btn.forEach((e, i) => {
  e.addEventListener('click', function () {
    les_etages.textContent += ' R' + i
    f.push(i * 20)
    if (is_move == false)
      mo()
  })
})

function ouvrirPortes() {
  porte1.animate([
    { width: '100px' },
    { width: '20px' }
  ], {
    duration: 4000,
    fill: "forwards"
  });

  porte2.animate([
    { width: '100px' },
    { width: '20px' }
  ], {
    duration: 4000,
    fill: "forwards"
  });
}

// Fonction pour fermer les portes de l'ascenseur
function fermerPortes() {
  porte1.animate([
    { width: '20px' },
    { width: '100px' }
  ], {
    duration: 4000,
    fill: "forwards"
  });

  porte2.animate([
    { width: '20px' },
    { width: '100px' }
  ], {
    duration: 4000,
    fill: "forwards"
  });
}

function move_top() {
  Elevator.animate([
    { bottom: `${i}%` },
    { bottom: `${f[0]}%` }
  ], {
    duration: (t + 1) * 1000,
    fill: "forwards"
  });
}

start.onclick = function () {
  mo()
  start.disabled = true
}
let step=0;
function mo() {
  let x = (f[0] - i)
  x = x > 0 ? x : x * (-1)
  t = x / 20
  
  step+=t
  console.log(t)
  n_step.textContent=step
  

  is_move = true
  fermerPortes()
  setTimeout(() => {
    move_top()
  }, 3000);
  setTimeout(() => {
    ouvrirPortes()
    i = f[0]
    f.shift()
    setTimeout(() => {
      is_move = false
      if (f.length > 0) {
        mo()
      }
    }, 5000);
  }, 5000);
}

reset.onclick=function(){
  f.length=0
  start.disabled=false
 n_step.textContent=''
}
//ouvrirPortes(); // Pour ouvrir les portes
//fermerPortes()// Pour fermer les portes après 3 secondes (3000 millisecondes)