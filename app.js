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





Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
