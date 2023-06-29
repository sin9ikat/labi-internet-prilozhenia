let formsArray = document.querySelectorAll('form');
setTimeout(() => {
    console.log(formsArray);
}, 5000);


let element1 = document.getElementById('element1');
let element2 = document.getElementById('element2');

element2.addEventListener('click', () => {
    let parent = element2.parentElement;
    parent.insertBefore(element2, element1);
});


setTimeout(function() {
    var os = window.navigator.platform;
    alert("Операционная система: " + os);
}, 6000);