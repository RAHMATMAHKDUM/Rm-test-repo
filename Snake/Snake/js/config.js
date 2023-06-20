const speed = 4;
const worldSize = 14;
const startPoint = [5, 5];
const snake = [startPoint];
const key = {
    arrowUp: 38,
    arrowDown: 40,
    arrowLeft: 37,
    arrowRight: 39
};

let movingDirection;
let moveInterval;