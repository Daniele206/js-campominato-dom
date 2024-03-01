// Element
const myGrid = document.querySelector('.my-grid');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');

// Element-none
let numCell;
let difficultySelected;
const bomb = [];

// Input
const selectDifficulty = document.querySelector('.select-difficulty')

// Button
const playGameBtn = document.getElementById('play-game-btn');
const resetGameBtn = document.getElementById('reset-game-btn');

// Output

// Functions
function rNone(element){
  element.classList.remove('d-none');
  element.classList.add('d-flex');
}

function addCell(num, difficulty){
  const cl = document.createElement('div');
  cl.classList.add('my-cell');

  if(difficulty.value === 'easy'){
    cl.classList.add('whidth-easy');
  }else if(difficulty.value === 'normal'){
    cl.classList.add('whidth-normal');
  }else if(difficulty.value === 'hard'){
    cl.classList.add('whidth-hard');
  };

  cl.addEventListener('click', function (){
    console.log(num);
    this.innerHTML = num;
    if(bomb.includes(num)){
      cl.classList.add('bomb');
    }else{
      cl.classList.add('active');
    }
  });

  resetGameBtn.addEventListener('click', function(){
    cl.classList.remove('active');
    cl.innerHTML = '';
  });

  return cl;
};

//------------------------------------------------------------------
easy.addEventListener('click', function(){
  location.reload();
})
normal.addEventListener('click', function(){
  location.reload();
})
hard.addEventListener('click', function(){
  location.reload();
})

playGameBtn.addEventListener('click', function(){
  rNone(myGrid);
});

if(selectDifficulty.value === 'easy'){
  numCell = 100;
}else if(selectDifficulty.value === 'normal'){
  numCell = 81;
}else if(selectDifficulty.value === 'hard'){
  numCell =49;
};

while(bomb.length < 16){
  const nBomb = Math.ceil(Math.random() * numCell);

  if(bomb.includes(nBomb) === false){
    bomb.push(nBomb);
  }
}

for(let i=1; i <= numCell; i++){
  const cell = addCell(i, selectDifficulty);
  myGrid.append(cell);
}