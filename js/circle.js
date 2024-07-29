"use strict";

// create a circle object
var circle = {
    radius : 1,
    getDiameter : function(){
        return this.radius*2;
    },
    getCircumference : function(){
        return Math.PI * (this.radius * 2);
    }, 
    getArea : function(){
        var area = Math.PI * (Math.pow(this.radius, 2));
        return area;
    }
};

circle.logInfo = function(rounded){
    if (rounded === true){
        console.log("The circle's radius is " + Math.round(this.radius) + ".");
        console.log("The circle's diameter is " + Math.round(this.getDiameter()) + ".");
        console.log("The circle's circumference is " + Math.round(this.getCircumference()) + ".");
        console.log("The circle's area is " + Math.round(this.getArea()) + ".")
    } else {
        console.log("The circle's radius is " + this.radius + ".");
        console.log("The circle's diameter is " + this.getDiameter() + ".");
        console.log("The circle's circumference is " + this.getCircumference() + ".");
        console.log("The circle's area is " + this.getArea() + ".");
    }
    
}

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);

console.log("=======================================================");
circle.radius = 5;

// log info about the circle
console.log("Raw circle information");
circle.logInfo(false);
console.log("Circle information rounded to the nearest whole number");
circle.logInfo(true);