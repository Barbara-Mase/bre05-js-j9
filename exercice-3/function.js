export function computeAverage(numbers) {
    let sum = 0;
    let average = 0
    let nbNumbers = 0
    for(let number of numbers) {
        sum = sum + number;
        nbNumbers = nbNumbers + 1;
    }
    average = sum / nbNumbers;
    console.log(average);
}