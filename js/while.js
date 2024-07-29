var i = 2
while (i <= 65536){
    console.log(i);
    i *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var sales = Math.floor(Math.random() * 5) + 1;
    if (sales <= allCones){
        console.log(sales + " cones sold");
        allCones -= sales;
    } else if (sales > allCones){
        console.log("Cannot sell you " + sales + " cones. I only have " + allCones + "...");
    }
} while (allCones > 0);

