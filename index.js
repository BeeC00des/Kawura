const axios = require('axios');

const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    event.preventDefault()
    registerUser();
});

// Registers a new user
function registerUser() {
    form = document.getElementById("registration-form")     // get the form
    const url = 'http://127.0.0.1:8000/api/signup/';
    var data = {};

    // get values of form elements
    var first_name = form.elements.item(0).value;
    var last_name = form.elements.item(1).value;
    var email = form.elements.item(2).value;
    var password = form.elements.item(3).value;
    var password2 = form.elements.item(4).value;

    // check if all fields are valid before sending
    if (isAlpha(first_name)) {
        if (isAlpha(last_name)){
            if (validEmail(email)){
                if (validatePassword(password, password2)) {
                    userObj = {
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                        password: password,
                        password2: password2
                    }
                    var userData = JSON.stringify(userObj)
                    console.log(userData);

                    axios({
                        method: 'post',

                        url: url,
                        data: userObj
                    })
                    .then(data => console.log(data))
                    .catch(err=>console.log(err))
                }
            }
        }
    }
    return false;
}

function validatePassword(password, password2) {
    if (password != password2) {
        return false;
    }
    return true;
}

function validEmail(email) {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailFormat)){
        return true;
    } else {
        alert("invalid email address!");
        return false
    }
}

function isAlpha(name) {
    var letters = /^[A-Za-z]+$/;
    if (name.match(letters)){
        return true;
    } else {
        alert("Name fields must have alphabet characters only");
        return false
    }
}