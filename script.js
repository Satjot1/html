var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
function homeshow() {
    home.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
}
function aboutshow() {
    home.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
}
function contactshow() {
    home.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
}