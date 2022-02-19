var index = 1;
showSlide(index);
function plusSlide(n) {
    document.getElementById('video1').pause();
    showSlide(index += n);
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("sliderImg");
    if(n > slide.length) { index = 1; }
    if(n < 1) { index = slide.length; }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    slide[index-1].style.display = "block";
}