window.onscroll = function(){
    if(document.documentElement.scrollTop>150){
        document.querySelector('.go__top--container')
        .classList.add('show');
    }else{
        document.querySelector('.go__top--container')
        .classList.remove('show');
    }
}
document.querySelector('.go__top--container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});