const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById('heart').addEventListener('click', function() {
    if (this.textContent === '♡') {
        this.textContent = '❤️';
    } else {
        this.textContent = '♡'; 
    }
});
document.getElementById('heart1').addEventListener('click', function() {
    if (this.textContent === '♡') {
        this.textContent = '❤️'; 
    } else {
        this.textContent = '♡'; 
    }
});
