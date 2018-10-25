// document.getElementById('slider-left').onclick = sliderLeft;
autoSlider();
var left = 0;
var timer;

function autoSlider()
{
    timer = setTimeout(function () {
        var polosa = document.getElementById('polosa');
        left = left - 712;
        if (left < -4272) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider();
    }, 1000);
}

// document.getElementById('slider-right').onclick = sliderRight;
// var right = 0;
//
// function sliderRight()
// {
//     var polosa = document.getElementById('polosa');
//     left = left + 712;
//     if (right > +4272) {
//         right = 0;
//     }
//     polosa.style.right = right + 'px';
// }
