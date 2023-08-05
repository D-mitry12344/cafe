let btns = document.querySelectorAll('.section-banner-interior #btn svg');
let banner = document.querySelector('.section-banner-interior #banner');

banner.style.marginLeft = '-550px'
btn[0].addEventListener('click',()=>{
	banner.style.marginLeft= Number(banner.style.marginLeft.slice(0,-2)) + 600 + 'px';
	if(Number(banner.style.marginLeft.slice(0,-2))> 0){
		banner.style.marginLeft= '0px'
	}
	return banner.style.marginLeft;
})
btn[1].addEventListener('click',()=>{
	banner.style.marginLeft=  Number(banner.style.marginLeft.slice(0,-2)) - 600 + 'px';
	if(Number(banner.style.marginLeft.slice(0,-2))< -1200){
		banner.style.marginLeft= '-1200px'
	}
	return banner.style.marginLeft;

})