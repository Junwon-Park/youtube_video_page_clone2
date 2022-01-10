// querySelector를 사용하여 엘리먼트를 불러오는 부분
let moreIcon = document.querySelector('.fa-caret-down');
let videoTitle = document.querySelector('.video__title');
let subsBtn = document.querySelector('.subs__btn');
// querySelectorAll을 사용하면 지정한 태그, 아이디, 클래스에 해당하는 모든 요소를 배열로 반환한다.
let actionBtn = document.querySelectorAll('.action__btn li i');

console.log(moreIcon);
console.log(videoTitle);
console.log(subsBtn);
console.log(actionBtn); //! NodeList(배열 형태)라는 것을 반환

// 위에서 불러온 more 버튼을 클릭했을 때, classList.toggle을 사용하여 지정한 클래스가 있으면 없애고, 없으면 생성하는 토글링이 되도록 하였다.
moreIcon.addEventListener('click', () => {
  moreIcon.classList.toggle('down');
  videoTitle.classList.toggle('clamp');
  console.log('clicked');
});

// 위에서 querySelectorAll을 사용해서 여러 개의 요소를 불러와 배열로 받았기 때문에 배열을 순회하는 foreach()를 사용하여
// 모든 요소를 순회하면서 이벤트가 발생한 요소를 토글링 한다.
actionBtn.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
});

// subscribe 버튼을 눌렀을 때, 버튼의 색상을 바꾸는 토글링을 구한한 것이다.
subsBtn.addEventListener('click', () => {
  subsBtn.classList.toggle('clicked');
});
