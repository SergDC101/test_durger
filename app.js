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


let btn_setup = document.getElementById("test_setup");

btn_setup.addEventListener('click', function(){
    if (isset($_POST['test_fio'])) {
        console.log('test_fio');
    } 
    if (isset($_POST['test_last_name'])) {
        console.log('test_last_name');
    } 
    if (isset($_POST['test_first_name'])) {
        console.log('test_first_name');
    } 
    if (isset($_POST['test_father_name'])) {
        console.log('test_father_name');
    } 
    if (isset($_POST['test_birthday'])) {
        console.log('test_birthday');
    } 
})


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
});
