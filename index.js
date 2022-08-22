
let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = function (){
    let firstTwo = drivers.slice(0,2);
    return firstTwo;
}
const returnLastTwoDrivers = function (){
    let lastTwo = drivers.slice(-2);
    return lastTwo;
}
let selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
 
function createFareMultiplier(fare){
    return function fareMultiplier(multiple){
        // let multiplyFare = multiple * fare;
        return multiple * fare;
    }
 }
 console.log(createFareMultiplier(5))





const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driverArray, driverFunction) {
    return driverFunction(driverArray);
}



