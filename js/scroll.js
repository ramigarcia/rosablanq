let last_known_scroll_position = 0;
let ticking = false;

const navBottom = document.querySelector('.nav-bottom')

function doSomething(scroll_position) {
  console.log(scroll_position)
  if(scroll_position >= 55){
    console.log('hola');
    navBottom.classList.add('nav-bottom-active')
  }else{
    console.log('chau');
    navBottom.classList.remove('nav-bottom-active')
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});