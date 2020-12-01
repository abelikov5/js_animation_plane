let plane = document.querySelector('.plane');

let cord_x = 0;
let cord_y = 0;
let flight_dir = 1;

function move () {
    let doc_width = document.documentElement.clientWidth;
    if (cord_x < doc_width - plane.offsetWidth && flight_dir) {
        cord_x++;
        if (cord_x > doc_width * 0.3 && cord_x < doc_width * 0.4) {
            cord_y++;
        }
        if (cord_x > doc_width * 0.6 && cord_x < doc_width * 0.7) {
            cord_y--;
        }
        plane.style.left = cord_x + 'px';
        plane.style.top = cord_y + 'px';
        return true ;
    } 
    if (cord_x == doc_width - plane.offsetWidth) {
        flight_dir = 0;
        plane.style.transform = 'rotateY(' + 180 + 'deg)';
    }
    if (cord_x < 0) {
        flight_dir = 1;
        plane.style.transform = 'rotateY(' + 360 + 'deg)';
    }
    cord_x--;
    plane.style.left = cord_x + 'px';
    plane.style.top = cord_y + 'px';
}
setInterval(move, 20); 