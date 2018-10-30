function iqTest(numbers){
    let numbersArr = numbers.split(' ').map(n => parseInt(n));
    let evenArr = numbersArr.filter(n => n % 2 === 0);
    let oddArr = numbersArr.filter(n => n % 2 !== 0);
    return evenArr.length === 1 ?
        numbersArr.indexOf(evenArr[0]) + 1 : numbersArr.indexOf(oddArr[0]) + 1;
}