
let h3 = document.querySelectorAll('.videos-photos-h3');

window.addEventListener('mousemove', liveGradient);

function liveGradient(e) {
    let x = e.clientX ;
    let y = e.clientY ;
    x+=y;
    h3.forEach(el => {
        el.style.background = `linear-gradient(` + x + `deg, rgb(0, 255, 0), rgb(0, 0, 255))`;
    });
    
    
}