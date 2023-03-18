// Code your solution in this file!
let hQ = 42;
function distanceFromHqInBlocks(distance1) {
    return Math.abs(distance1 - hQ);
}

function distanceFromHqInFeet(distance2) {
    return Math.abs(distance2 - hQ) * 264;
}

function distanceTravelledInFeet(distance3, distance4) {
    return Math.abs(distance3 - distance4) * 264;
}

function calculatesFarePrice(startLocation, endLocation) {
    if (Math.abs(startLocation - endLocation) * 264 <= 400) {
        return 0;
    } else if (Math.abs(startLocation - endLocation) * 264 > 400 && (Math.abs(startLocation - endLocation) * 264) <= 2000) {
        return ((Math.abs(startLocation - endLocation) * 264) - 400) * 0.02;
    } else if (Math.abs(startLocation - endLocation) * 264 > 2000 && (Math.abs(startLocation - endLocation) * 264) <= 2500) {
        return 25;
    } else if (Math.abs(startLocation - endLocation) * 264 > 2500) {
        return "cannot travel that far";
    }
}