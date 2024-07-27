// JavaScript to handle flipping of boxes
function flipBox(element) {
    // Toggle the 'active' class on the clicked box
    element.classList.toggle("active");
}



// JavaScript for "Go to Top" button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var goToTopBtn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
