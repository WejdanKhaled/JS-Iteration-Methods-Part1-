const numbers = [10, 13, 20, 25, 38, 35, 40];


// [25, 38, 35,40]
const aboveTwentyFive = numbers.filter((num) => {
    if (num >= 25) return true;
    else return false;
});
//console.log(aboveTwentyFive);

const divisbleByFive = numbers.filter ((num) => {
    return num % 5 === 0;

});
//console.log(divisbleByFive);

const numbersSqured = numbers.map ((num)=> num **2 );
//console.log(numbersSqured);

const numbersDoubled = numbers.map ((num)=> num *2 );
//console.log(numbersDoubled);

const LargerThanTwenty = numbers.filter ((num)=> num >= 20);
const LargerThanTwentySquared = LargerThanTwenty.map ((num)> num **2);
//console.log(LargerThanTwentySquared)

const stepSixChained = numbers.filter((num) => num % 5 === 0)
.map ((num)=> num * 3); 
 //console.log(stepSixChained);