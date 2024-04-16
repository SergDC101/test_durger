let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn_limits = document.getElementById("test_limits");
let btn_anketa = document.getElementById("test_anketa");
let btn_lk = document.getElementById("test_lk");
let btn_back = document.getElementById("main_menu");

btn_limits.addEventListener("click", function(){
    document.getElementById("btn_block").style.display = "none";
    document.getElementById("btn_block_limits").style.display = "block";
    document.getElementById("main_menu").style.display = "block";
});


btn_anketa.addEventListener("click", function(){
    document.getElementById("btn_block").style.display = "none";
    document.getElementById("btn_block_anketa").style.display = "block";
    document.getElementById("main_menu").style.display = "block";
});

btn_lk.addEventListener("click", function(){
    document.getElementById("btn_block").style.display = "none";
    document.getElementById("btn_block_lk").style.display = "block";
    document.getElementById("main_menu").style.display = "block";
});


btn_back.addEventListener("click", function(){
    document.getElementById("main_menu").style.display = "none";
    document.getElementById("btn_block_limits").style.display = "none";
    document.getElementById("btn_block_anketa").style.display = "none";
    document.getElementById("btn_block_lk").style.display = "none";
    document.getElementById("btn_block").style.display = "block";
});


let btn_limits_ui = document.getElementById("test_limits_ui");
let btn_limits_api = document.getElementById("test_limits_api");

let btn_anketa_ui = document.getElementById("test_anketa_ui");
let btn_anketa_api = document.getElementById("test_anketa_api");

let btn_lk_ui = document.getElementById("test_lk_ui");
let btn_lk_api = document.getElementById("test_lk_api");


btn_limits_ui.addEventListener("click", function(){
    tg.sendData("test_limits_ui");
});

btn_limits_api.addEventListener("click", function(){
    tg.sendData("test_limits_api");
});

btn_anketa_ui.addEventListener("click", function(){
    tg.sendData("test_anketa_ui");
});

btn_anketa_api.addEventListener("click", function(){
    tg.sendData("test_anketa_api");
});

btn_lk_ui.addEventListener("click", function(){
    tg.sendData("test_lk_ui");
});

btn_lk_api.addEventListener("click", function(){
    tg.sendData("test_lk_api");
});





