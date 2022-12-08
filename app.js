
document.onkeydown = checkKey;
var car1 = document.querySelector("#car1");
var car2 = document.querySelector("#car2");
var car3 = document.querySelector("#car3");

window.onload = function(e){
    document.getElementById('road').style.display = "none";
    document.getElementById('alert_message').style.display = "none";
    document.getElementById('menu').style.display = "block";

    move();
    check_crash();
}

function start_game()
{
    document.getElementById('road').style.display = "block";
    document.getElementById('menu').style.display = "none";
    document.getElementById("car1").style.top = 420+"px";
    new_car();
}

function end_game()
{
    document.getElementById('road').style.display = "none";
    document.getElementById("alert_message").innerHTML = "Crashed!" ;
    document.getElementById('alert_message').style.display = "block";
    document.getElementById('menu').style.display = "block";
}

function checkKey(e) {

    e = e || window.event;
    var style_car = window.getComputedStyle(car1);
    var style_enemy = window.getComputedStyle(car2);
    var style_enemy_2 = window.getComputedStyle(car3);

    if (e.keyCode == '38') {
        // up arrow
        var top_car = style_car.getPropertyValue('top');
        top_car = parseInt(top_car);
        top_car -= 20;
        if (top_car < 20) top_car = 20;
        document.getElementById("car1").style.top = top_car+"px";

    } else if (e.keyCode == '40') {
        // down arrow
        var top_car = style_car.getPropertyValue('top');
        top_car = parseInt(top_car);
        top_car += 20;
        if (top_car > 450) top_car = 450;
        document.getElementById("car1").style.top = top_car+"px";

    } else if (e.keyCode == '37') {
        // left arrow
        var left_car = style_car.getPropertyValue('left');
        left_car = parseInt(left_car);
        left_car -= 20;
        if (left_car < 25) left_car = 25;
        document.getElementById("car1").style.left = left_car+"px";
    } else if (e.keyCode == '39') {
        // right arrow
        var left_car = style_car.getPropertyValue('left');
        left_car = parseInt(left_car);
        left_car += 20;
        if (left_car > 550) left_car = 550;
        document.getElementById("car1").style.left = left_car+"px";
    }

     check_crash(style_car, style_enemy, style_enemy_2);

}

function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function new_car(){
    let rand_1 = generateRandomIntegerInRange(20, 250);
    let rand_2 = generateRandomIntegerInRange(290, 500);

    document.getElementById("car2").style.left = rand_1 + "px";
    document.getElementById("car2").style.top = 20+"px";
    document.getElementById("car3").style.left = rand_2 + "px";
    document.getElementById("car3").style.top = 20+"px";
}

function move() {
    var style_1 = window.getComputedStyle(car2);
    var style_2 = window.getComputedStyle(car3);
    var top_1 = style_1.getPropertyValue('top');
    var top_2 = style_2.getPropertyValue('top');
    var top_1 = parseInt(top_1);
    var top_2 = parseInt(top_2);
    top_1+=10;
    top_2+=10;
    if (top_1<450 || top_2<450)
    {
        document.getElementById("car2").style.top = top_1+"px";
        document.getElementById("car3").style.top = top_2+"px";
    }
    else new_car();

    setTimeout(move, 90);
}

function check_crash(style_car, style_enemy, style_enemy_2)
{
    var style_car = window.getComputedStyle(car1);
    var style_enemy = window.getComputedStyle(car2);
    var style_enemy_2 = window.getComputedStyle(car3);


    var top_enemy = style_enemy.getPropertyValue('top');
    top_enemy = parseInt(top_enemy);

    var bottom_enemy = top_enemy + 150;

    var left_enemy = style_enemy.getPropertyValue('left');
    left_enemy = parseInt(left_enemy);

    var right_enemy = left_enemy+90;


    var top_enemy_2 = style_enemy_2.getPropertyValue('top');
    top_enemy_2 = parseInt(top_enemy_2);

    var bottom_enemy_2 = top_enemy_2 + 150;

    var left_enemy_2 = style_enemy_2.getPropertyValue('left');
    left_enemy_2 = parseInt(left_enemy_2);

    var right_enemy_2 = left_enemy_2+90;




    var top_car = style_car.getPropertyValue('top');
    top_car = parseInt(top_car);

    var bottom_car = top_car + 150;

    var left_car = style_car.getPropertyValue('left');
    left_car = parseInt(left_car);

    var right_car = left_car + 90;

     if (left_car <= right_enemy && left_car >= left_enemy && top_car <= bottom_enemy && bottom_car >= top_enemy) end_game();
     if (right_car <= right_enemy && right_car >= left_enemy && top_car <= bottom_enemy && bottom_car >= top_enemy) end_game();

    if (left_car <= right_enemy_2 && left_car >= left_enemy_2 && top_car <= bottom_enemy_2 && bottom_car >= top_enemy_2) end_game();
    if (right_car <= right_enemy_2 && right_car >= left_enemy_2 && top_car <= bottom_enemy_2 && bottom_car >= top_enemy_2) end_game();

    setTimeout(check_crash, 1);

}


