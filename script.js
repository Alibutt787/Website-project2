
var theme1 =document.getElementById("theme1");
var theme2 =document.getElementById("theme2");
var theme3 =document.getElementById("theme3");
var theme4 =document.getElementById("theme4");

theme1.addEventListener('click' ,()=>{
    document.getElementById('theme_style').href='white.css';
});

theme2.addEventListener('click' ,()=>{
    document.getElementById('theme_style').href='blue.css';
});
theme3.addEventListener('click' ,()=>{
    document.getElementById('theme_style').href='green.css';
});
theme4.addEventListener('click' ,()=>{

    document.getElementById('theme_style').href='black.css';
});