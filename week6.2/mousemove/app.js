/*let tracker = document.querySelector('.red-box');
document.addEventListener('mousemove', logMouse);
function logMouse (e) {
    tracker.innerText = `Screen X: ${e.screenX} | Screen Y: ${e.screenY}`;
};  */
document.querySelector('.red-box').addEventListener('mousemove', showCords);
function showCords (event) {
    let x = event.clientX;
    let y = event.clientY;
    let coords = 'X Coordinate: ' + x + ' | ' + 'Y Coordinate: ' + y;
    document.querySelector('.red-box').innerHTML = coords;
};