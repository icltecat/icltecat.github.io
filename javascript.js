function toggleNavbar() {
    const navbar2 = document.getElementById('navbar2');
    if (navbar2.style.display === 'none' || navbar2.style.display === '') {
        navbar2.style.display = 'block';
    } else {
        navbar2.style.display = 'none';
    }
}
 
document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
       event.preventDefault();
    }
    if(event.keyCode == 123){
       event.preventDefault();
    }
});

document.addEventListener('contextmenu', 
    event => event.preventDefault()
);
