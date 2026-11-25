function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function pulseAccent() {
    const colors = ["#7c3aed", "#06b6d4", "#f97316", "#ef4444", "#06d6a0", "#3b82f6"];
    document.documentElement.style.setProperty('--accent1', colors[Math.floor(Math.random() * colors.length)]);
}

function handleSend(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const preview = document.getElementById("preview");
    preview.style.display = "block";
    preview.innerHTML = `
    <b>From:</b> ${name} &lt;${email}&gt;<br>
    <b>Subject:</b> ${subject}<br><br>
    <pre style="white-space:pre-wrap">${message}</pre>
  `;
}
