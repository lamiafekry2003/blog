document.getElementById("navbarToggle").addEventListener("click", function() {
    const navbar = document.getElementById("navbar-hamburger");
    const toggleButton = document.getElementById("navbarToggle");
    const body=document.querySelector('body')
  
    navbar.classList.toggle("hidden");
    // window.location='nav.html'
    toggleButton.classList.toggle("open");
  });
// ----------------------------------------------------
// video
  document.getElementById("watchVideo").addEventListener("click", function(event) {
    event.preventDefault();
    
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
  
    // Show the modal
    modal.style.display = "flex";
    video.play();
  });
  
  document.getElementById("closeModal").addEventListener("click", function() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
  
    // Hide the modal
    modal.style.display = "none";
  
    // Pause the video and reset it
    video.pause();
    video.currentTime = 0;
  });
  // --------------------------------------------------------------
  let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};