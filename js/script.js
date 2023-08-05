const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let btnSend = document.querySelector('#btnSend');
let popup = document.querySelector('#popup');
btnSend.onclick = ()=>{
  popup.style.display='block';
  document.querySelector('html').style.overflow = 'hidden';
}

let closeBtn = document.querySelector('.closeBtn');
closeBtn.onclick = ()=>{
  popup.style.display='';
  document.querySelector('html').style.overflow = '';
}


document.querySelector('.burger').onclick = ()=>{
  if(document.querySelector('.burger').classList[1] === 'active'){
    document.querySelector('.burger').classList.remove('active');
    document.querySelector('.header-banner__menu__lists').style.right = '';
    document.querySelector('html').style.overflow = '';
  }else{
    document.querySelector('.header-banner__menu__lists').style.right = '0';
    document.querySelector('.burger').classList.add('active');
    document.querySelector('html').style.overflow = 'hidden';
  }
}