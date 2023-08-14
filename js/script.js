var pacman;
var ghost;
var cookie;

var move = function(direction, step) {
    var position = pacman['offset'+direction];
    var newPosition = position + step;
    pacman.style[direction.toLowerCase()] = newPosition+'px';
    checkCollisions();
};

var movePacman = function(evt) {
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/keydown_event
    if (evt.isComposing || evt.keyCode === 229) return;
    switch(evt.code) {
        case 'ArrowRight': move('Left', 3); break;
        case 'ArrowLeft': move('Left', -3); break;
        case 'ArrowDown': move('Top', 3); break;
        case 'ArrowUp': move('Top', -3); break;
    }
};

var checkCollision = function(character, object) {
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    var objectPosition = object.getBoundingClientRect();
    const dx = character.offsetLeft - objectPosition.x;
    const dy = character.offsetTop - objectPosition.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < character.offsetWidth + 5;
}

var checkCollisions = function() {
    if (checkCollision(pacman, cookie)) {
        document.getElementById('cookie').style.display = 'none';
    }
}

var init = function() {
    pacman = document.getElementById('pacman');
    ghost = document.getElementById('ghost');
    cookie = document.getElementById('cookie');
    document.addEventListener('keydown', movePacman);
};

window.addEventListener('DOMContentLoaded', init);