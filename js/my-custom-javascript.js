"use strict";
$(function(){
    function changeColor(){
        $(this).css('background-color', 'blue');
    }
    function changeSize(){
        $(this).css('font-size', '18px');
    }
    function toRed(){
        $(this).css('color', 'red');
    }
    function toBlack(){
        $(this).css('color', 'black');
    }
    $('h1').click(changeColor);
    $('p').dblclick(changeSize);
    $('li').hover(toRed, toBlack);
});

