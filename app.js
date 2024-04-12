let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let btn1 = document.getElementById("test_limits");


btn1.addEventListener("click", function(){
    document.getElementById("btn_block").style.display = "none";
    document.getElementById("form_limit").style.display = "block";
});




Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
