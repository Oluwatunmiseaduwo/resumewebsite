const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
     themeIcon.src = "images/heart-light.svg";
    body.classList.add("dark-mode");
} else {
    themeIcon.src = "images/heart-dark.svg";
}

themeIcon.classList.add("beat");

setTimeout(() => {
    themeIcon.classList.remove("beat");
}, 400);

// Toggle theme
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeIcon.src = "images/heart-light.svg";
        localStorage.setItem("theme", "dark");
    } else {
        themeIcon.src = "images/heart-dark.svg";
        localStorage.setItem("theme", "light");
    }
});

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold:0.2
});

sections.forEach(section => {
    observer.observe(section);
});

//Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
    })
})

//Sparkle cursor and trail
document.addEventListener("mousemove", (e) => {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.textContent = "✦";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});

const starCursor = document.createElement("div");
starCursor.id = "star-cursor";
starCursor.textContent = "✦";
document.body.appendChild(starCursor);
document.addEventListener("mousemove", (e) => {
    starCursor.style.left = e.clientX + "px";
    starCursor.style.top = e.clientY + "px";
});


