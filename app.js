let arrayLength = prompt("Enter the length of array");
let array = [];

for (let i = 0; i < arrayLength; i++) {
    array.push ( prompt(`Enter item ${i + 1} of the array: `));
}
console.log ("Original array:" , array);

// Відсортувати масив за зростанням.
array.sort((a , b) => a - b);
console.log ("Sorted array: ", array);

// Видалити елементи з масиву з 2 по 4 (включно!).
if (arrayLength > 4) {
    array.splice (1 , 3 );
} else {
    console.log ("Array doesnot have enough elements to remove")
}

console.log ("Final array: ", array);