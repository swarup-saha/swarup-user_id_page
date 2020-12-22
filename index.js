console.log("Welcome to project 4");

let name = document.getElementById('name');
let email = document.getElementById('email');
let phonenumber = document.getElementById('phonenumber');
let validname = false;
let validemail = false;
let validphonenumber = false;
// failure.classList.remove('show');
// success.classList.remove('show');
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', (e)=>{
    e.preventDefault();
    let regex = /^[a-zA-Z]([0-9a-zA-Z ]){2,15}$/
    let str = name.value;
    console.log(regex, str);
    console.log(regex.test(str))
    if (regex.test(str)) {
        console.log('Your blured the event');
        name.classList.remove('is-invalid');
        validname = true;
    }
    else{
        console.log("you name value not correct");
        name.classList.add('is-invalid');
        validname = false;
    }
})
email.addEventListener('blur', (e)=>{
    e.preventDefault();
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    console.log(regex, str);
    console.log(regex.test(str))
    if (regex.test(str)) {
        console.log('Your email is correct for the event');
        email.classList.remove('is-invalid');
        validemail = true;
    }
    else{
        console.log("you email value not correct");
        email.classList.add('is-invalid');
        validemail = false;
    }
})
phonenumber.addEventListener('blur', (e)=>{
    e.preventDefault();
    let regex = /^([0-9]){10}$/
    let str = phonenumber.value;
    console.log(regex, str);
    console.log(regex.test(str))
    if (regex.test(str)) {
        console.log('Your phone number is correct ');
        phonenumber.classList.remove('is-invalid');
        validphonenumber = true;
    }
    else{
        console.log("you phone number  not correct");
        phonenumber.classList.add('is-invalid');
        validphonenumber = false;
    }
})


let submit = document.getElementById('submit');

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    let success = document.getElementById('success');
    let failure = document.getElementById('failure');
    if (validname & validemail & validphonenumber) {
        success.classList.add('show'); 
        // failure.classList.remove('show');  
        $('#success').show();
        $('#failure').hide();     
    }
    else{
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
        // success.classList.remove('show');
    }
})