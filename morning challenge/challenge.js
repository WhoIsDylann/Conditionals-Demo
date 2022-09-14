var numbers = [1, 4, 11, 2, 37, -4];

var max = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] >= max) 
    max = numbers[i];   
}

console.log(max);

var numbers = [1, 4, 11, 2, 37, -4];

var min = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] <= min) 
    min = numbers[i];   
}

console.log(min);