function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        var product = num * i;
        console.log(`${num} x ${i} = ${product}`);
    }
}

for (var i = 1; i <= 10; i ++){
    var random = Math.floor((Math.random() * 180) + 20);
    random % 2 === 0 ? console.log(random + " is even") : console.log(random + " is odd"); 
}

for (var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

for (var j = 100; j >= 5; j -= 5){
    console.log(j);
}