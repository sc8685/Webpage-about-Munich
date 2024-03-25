/*
  Name: Stipe Čulina
  Course: ISTE240
  Date: 09.05.2023.
  Individual Project Final
*/


/* Fade in function */
function fade() {
    const elements = document.querySelectorAll('.img1, .img2, p, h1, h2, .img3');
  
    /*Check if content is vieport */
    const inViewport = (el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      return (rect.top <= windowHeight - 100) && (rect.bottom >= 100);
    };
  
    const checkVisibility = () => {
      elements.forEach((el) => {
        if (inViewport(el)) {
          el.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
  }
  
  /*Listener to fade page on open and refresh */
  document.addEventListener('DOMContentLoaded', fade);
  

    



/*Back to top btn */
const scrollBtn=document.getElementById('scrollBtn');

/*When to show the btn*/
function showBtn(){
    if(document.documentElement.scrollTop>200){
        scrollBtn.style.display='block';
    }else{
        scrollBtn.style.display='none';
    }
}

/*Take you back to top */
function scrollTop(){
    window.scrollTo({
        top:0,
        behavior: 'smooth',
    });
}

scrollBtn.addEventListener('click', scrollTop);
window.addEventListener('scroll',showBtn);