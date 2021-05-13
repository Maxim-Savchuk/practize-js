const objC = {
    z: 5,
}

const objB = Object.create(objC);
objB.y = 2;

const objA = Object.create(objB);
objA.x = 1;


