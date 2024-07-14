function sendwhatsapp() {
    var first = document.querySelector('.first').value;
    var last = document.querySelector('.last').value;
    var email = document.querySelector('.email').value;
    var number = document.querySelector('.number').value;

    if (first && last && email && number) {
        var city = document.querySelector('.city').value || "Not provided";

        var message =
            "Name: " + first + " " + last + "\n" +
            "Email: " + email + "\n" +
            "Contact: " + number + "\n" +
            "City: " + city;

        var encodedMessage = encodeURIComponent(message);
        var url = 'https://wa.me/+917801011369?text=' + encodedMessage;

        // Open WhatsApp in the same window/tab with the pre-filled message
        window.location.href = url;
    } else {
        alert("Please fill in all required fields.");
    }
}
