function sendwhatsapp() {
    var first = document.querySelector('.first').value;
    var last = document.querySelector('.last').value;
    var email = document.querySelector('.email').value;

    var number = document.querySelector('.number').value;
   

    if (first && last && email && number) {
        var phonenumber = ' 8178237828';        
        var city = document.querySelector('.city').value || "Not provided";

        var url = 'https://wa.me/' + phonenumber + "?text="
        + "*Name :* " + first + last + "%0a"
        + "*Email :* " + email + "%0a"
        + "*Contact:* " + number + "%0a"
        + "*City :* " + city + "%0a";

        window.open(url, '_blank').focus();
    } else {
        alert("Please fill in all required fields.");
    }
    
}  