const background = document.querySelector('.background');
const rabbit = document.querySelector('.objects__rabbit');
const pigeon = document.querySelector('.objects__pigeon');
const rabbitClickable = document.querySelector('.rabbit__clickable');
const pigeonClickable = document.querySelector('.pigeon__clickable');

const lamp = document.querySelector('.lamp__image');
const light = document.querySelector('.light');
const figures = document.querySelector('.objects__figures');

let canRestore = false;

background.addEventListener('click', () => {
   if (canRestore) {
      background.classList.remove('remove');
      background.classList.add('restore');
      canRestore = false;
   } else {
      background.classList.remove('restore');
      background.classList.add('remove');
      canRestore = true;
   }
});

lamp.addEventListener('mousedown', () => {
   lamp.classList.add('mousedown');
});

lamp.addEventListener('mouseup', () => {
   lamp.classList.remove('mousedown');
});

lamp.addEventListener('click', () => {
   light.classList.toggle('on');
   figures.classList.toggle('display');
});

rabbitClickable.addEventListener('click', () => {
    rabbitClickable.classList.add("hide");
    pigeonClickable.classList.remove("hide");

    rabbit.classList.add('hide');
    pigeon.classList.remove('hide');
});

pigeonClickable.addEventListener('click', () => {
    rabbitClickable.classList.remove("hide");
    pigeonClickable.classList.add("hide");

    pigeon.classList.add('hide');
    rabbit.classList.remove('hide');
});