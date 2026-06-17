// Typing Animation

var typed = new Typed(".typing", {
    strings: [
        "Python Developer",
        "DevOps Engineer",
        "Data Analyst",
        "AI & ML Enthusiast",
        "Cloud Enthusiast"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Skills Tabs

function showSkills(skillId){

    document.querySelectorAll(".skill-content")
    .forEach(content=>{
        content.classList.remove("active");
    });

    document.querySelectorAll(".tab-btn")
    .forEach(btn=>{
        btn.classList.remove("active");
    });

    document.getElementById(skillId)
    .classList.add("active");

    event.target.classList.add("active");
}

// Contact Form Demo

const form = document.querySelector(".contact-form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you for contacting me!");
        form.reset();
    });
}
emailjs.init("R7O0i1Y-2hQ7H73aA");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_Keerthana",
        "template_056ktvp",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }).catch((error) => {
        alert("Failed to send message");
        console.log(error);
    });
});