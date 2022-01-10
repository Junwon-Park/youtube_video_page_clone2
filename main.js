let moreIcon = document.querySelector('.fa-caret-down');
let videoTitle = document.querySelector('.video__title');
let actionBtn = document.querySelectorAll('.action__btn li i');
let subsBtn = document.querySelector('.subs__btn');

console.log(moreIcon);
console.log(videoTitle);
console.log(actionBtn);
console.log(subsBtn);

moreIcon.addEventListener('click', () => {
  moreIcon.classList.toggle('down');
  videoTitle.classList.toggle('clamp');
  console.log('clicked');
});

actionBtn.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});

subsBtn.addEventListener('click', () => {
  subsBtn.classList.toggle('clicked');
});
