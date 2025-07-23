// ------------------ function for about -----------------
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// ---------------- hamburger functions --------------------
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

// ---------------- contact form ----------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbxUhwoZNikNsYoBJ6jgfS8LxI3SnQ_Ns9rqMfdsJxdz3vZRtwEXUgoO3lWigdIrf-s5/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
const loader = document.getElementById('loader');

form.addEventListener('submit', e => {
    e.preventDefault();
    loader.style.display = 'inline-block';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            loader.style.display = 'none';
            msg.innerHTML = "Message sent successfully";
            form.reset();
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        })
        .catch(error => {
            loader.style.display = 'none';
            msg.innerHTML = "Error sending message. Please try again.";
            console.error('Error!', error.message);
            setTimeout(() => {
                msg.innerHTML = "";
            }, 5000);
        });
});
