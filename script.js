// ===== Sidebar Toggle (for mobile) =====
const sidebar = document.querySelector(".sidebar");

// Create toggle button dynamically
const toggleBtn = document.createElement("button");
toggleBtn.innerText = "☰";
toggleBtn.classList.add("toggle-btn");

document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show");
});


// ===== Active Link Highlight =====
const navLinks = document.querySelectorAll(".sidebar nav ul li a");

navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});


// ===== Contact Form Handling =====
const form = document.querySelector("#contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = "2px solid red";
      } else {
        input.style.border = "1px solid #ccc";
      }
    });

    if (valid) {
      alert("Message sent successfully! ✅");
      form.reset();
    } else {
      alert("Please fill all fields ❌");
    }
  });
}


// ===== Button Hover Effect =====
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.05)";
    btn.style.transition = "0.3s";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});


// ===== Fade-in Animation on Load =====
const mainContent = document.querySelector(".main");

window.addEventListener("load", () => {
  mainContent.style.opacity = 0;
  mainContent.style.transform = "translateY(20px)";

  setTimeout(() => {
    mainContent.style.transition = "all 0.6s ease";
    mainContent.style.opacity = 1;
    mainContent.style.transform = "translateY(0)";
  }, 100);
});