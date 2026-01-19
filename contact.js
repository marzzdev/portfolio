function sendEmail() {
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!userEmail || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const yourEmail = "magoos69420@gmail.com";
    const subject = "Contact Form Message";
    const body =
        `From: ${userEmail}\n\n${message}`;

    window.location.href =
        `mailto:${yourEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
