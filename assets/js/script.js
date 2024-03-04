// Element
const myGrid = document.querySelector('.my-grid');
const myGridBlock = document.querySelector('.my-grid-block');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
let allora = '';

// Element-none
let cell;
let numCell;
let difficultySelected;
const bomb = [];
const point = [];

// Input
const selectDifficulty = document.querySelector('.select-difficulty')

// Button
const playGameBtn = document.getElementById('play-game-btn');
const resetGameBtn = document.getElementById('reset-game-btn');

// Output
const result = document.querySelector('.my-result');

// Functions
function rNone(element){
  element.classList.remove('d-none');
  element.classList.add('d-flex');
}

function addCell(num, difficulty){
  const cl = document.createElement('div');
  cl.classList.add('my-cell');
  cl._cellID = num;

  if(difficulty.value === 'easy'){
    cl.classList.add('whidth-easy');
  }else if(difficulty.value === 'normal'){
    cl.classList.add('whidth-normal');
  }else if(difficulty.value === 'hard'){
    cl.classList.add('whidth-hard');
  };

  cl.addEventListener('click', function (){
    console.log(num);

    if(bomb.includes(num)){
      cl.classList.add('bomb');
    }else{
      cl.classList.add('active');
    };

    if(bomb.includes(num) === false){
      if(cl.classList.contains('active')){
        if(point.includes(num) === false){
          point.push(num);
        }
      }
    }

    if(cl.classList.contains('bomb') === true){
      result.innerHTML = `Hai fatto ${point.length} punti`;
      myGridBlock.classList.remove('d-none');
      allora = 'true';
      showBomb();
    }

    if(point.length === numCell - 16){
      result.innerHTML = `Hai fatto ${point.length} punti, IL MASSIMO!!!!`;
      myGridBlock.classList.remove('d-none');
      showBomb();
    }
  });

  resetGameBtn.addEventListener('click', function(){
    cl.classList.remove('active');
    cl.classList.remove('bomb');
    myGridBlock.classList.add('d-none');
    cl.innerHTML = '';
    result.innerHTML = '';
  });

  return cl;
};

function showBomb(){
  const allCell = document.querySelectorAll('.my-cell');
  console.log(allCell.length);
  for(let i = 0; i < allCell.length; i++){
    const oneCell = allCell[i];
    if(bomb.includes(oneCell._cellID)){
      oneCell.classList.add('bomb');
    };
  };
};

//------------------------------------------------------------------
easy.addEventListener('click', function(){
  location.reload();
});
normal.addEventListener('click', function(){
  location.reload();
});
hard.addEventListener('click', function(){
  location.reload();
});

playGameBtn.addEventListener('click', function(){
  rNone(myGrid);
});

if(selectDifficulty.value === 'easy'){
  numCell = 100;
}else if(selectDifficulty.value === 'normal'){
  numCell = 81;
}else if(selectDifficulty.value === 'hard'){
  numCell = 49;
};

while(bomb.length < 16){
  const nBomb = Math.ceil(Math.random() * numCell);
  if(bomb.includes(nBomb) === false){
    bomb.push(nBomb);
    console.log(nBomb);
  }
};

for(let i=1; i <= numCell; i++){
  cell = addCell(i, selectDifficulty);
  myGrid.append(cell);
};