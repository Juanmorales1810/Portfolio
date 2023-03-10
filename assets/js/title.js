let titleold = document.title;
window.onblur=() =>document.title = "Vuelve 😉";
window.onfocus=()=>document.title = titleold;