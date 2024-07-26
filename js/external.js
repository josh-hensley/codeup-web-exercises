console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userInput = prompt("What is your favorite color?");
alert("Your favorite color is " + userInput + "!!  Mine too!!");

var movies = [
    {
        title: "The Little Mermaid",
        days: 3
    },
    {
        title: "Brother Bear",
        days: 5
    },
    {
        title: "Hercules",
        days: 1
    }
];

var pricePerDay = 3;

function getTotalPrice(movies, pricePerDay){
    var totalPrice = 0;
    for (var i = 0; i < movies.length; i++) {
        totalPrice += movies[i].days * pricePerDay;
    }
    return totalPrice;
}

var amountPaidAnswer = getTotalPrice(movies, pricePerDay);

var amountPaid = prompt("You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?");
alert("You said "+ amountPaid + ".  Correct answer is " + amountPaidAnswer + ".")

var contracts = [
    {
        companyName: "Google",
        payRate: 400,
        hoursWorked: 6
    },
    {
        companyName: "Amazon",
        payRate: 380,
        hoursWorked: 4
    },
    {
        companyName: "Facebook",
        payRate: 350,
        hoursWorked: 10
    }
]

function getTotalPayment(contracts){
    var totalPayment = 0;
    for (var i = 0; i < contracts.length; i++){
        totalPayment += contracts[i].payRate * contracts[i].hoursWorked;
    }
    return totalPayment;
}

var totalPaymentAnswer = getTotalPayment(contracts);

var totalPaymentUser = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.");
alert("You said " + totalPaymentUser + ".  Correct answer is " + totalPaymentAnswer + ".");

var classStatus = {
    isFull: false,
    classTime: "2pm"
}

var studentStatus = {
    currentSchedule: ["10am", "11am", "2pm"],
}

var canEnroll = false;

function getCanEnroll(studentStatus, classStatus){
    if (classStatus.isFull == false){
        if (studentStatus.currentSchedule.includes(classStatus.classTime)){
            canEnroll = false;
        } else {canEnroll = true;}
    }
    return canEnroll;
}

var canEnrollAnswer = getCanEnroll(studentStatus, classStatus);
var canEnrollUser = prompt("A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.  Student's schedule is " + studentStatus.currentSchedule + ".  Class time is " + classStatus.classTime + ". The class is not full.  The student can enroll, true or false?");
alert("You said " + canEnrollUser + ". The correct answer is " + canEnrollAnswer + ".");

var shopper = {
    itemsBought : 4,
    offerExpired : false,
    isPremiumMember : false
};

function getCanOfferProduct(shopper){
    var canOfferProduct = false;
    if (shopper.itemsBought >= 2) {
        if (shopper.offerExpired == false){
            canOfferProduct = true;
        }
    }
    return canOfferProduct;
}

var offerProductAnswer = getCanOfferProduct(shopper);
var offerProductUser = prompt("A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products. The shopper has bought " + shopper.itemsBought + " items. Offer expired is " + shopper.offerExpired + ". Is the shopper a premium member? " + shopper.isPremiumMember + ".  Can a product offer be applied, true or false");
alert("You said " + offerProductUser + ". The correct answer is " + offerProductAnswer + ".");



