var userInput;
for (var i; i = 1;){
    userInput = prompt("Enter an odd number between 1 and 50.");
    if (userInput % 2 != 0 && userInput <= 50 && userInput >= 1){
        break;
    }
}

for (var i = 1; i <= 50; i++){
    if (i == userInput){
        console.log("Yikes! Skipping number: " + userInput);
        continue;
    }
    else if (i % 2 !== 0){
        console.log("Here's an odd number: " + i);
    } else {
        continue;
    }
}
