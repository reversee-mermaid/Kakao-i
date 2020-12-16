const visual = document.getElementById('visual');
const slide_list = document.getElementById('slide_list');

visual.onmousemove = function(e) {
    // if(e.offsetX < visual.offsetWidth / 2) {
    //     slide_list.style.cursor = `url('../asset/arrow_left.png') 0 0, auto`;
    // } else  {
    //     slide_list.style.cursor = `url('../asset/arrow_right.png') 0 0, auto`;
    // }

    const res = e.offsetX < (visual.offsetWidth / 2) ? 'left' : 'right';

    slide_list.style.cursor = `url('../asset/arrow_${res}.png') 0 0, auto`
}

visual.onclick = function(e) {
    if(e.offsetX > visual.offsetWidth / 2) {
        slide_list.style.left = '-100vw';
    } else {
        slide_list.style.left = 0;
    }
}