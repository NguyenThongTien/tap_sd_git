
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#comfirm-password');
var form = document.querySelector('form');

function showError(input, messege){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.add('error');
    small.innerText = messege   
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small');

    parent.classList.remove('error');
    small.innerText = ''   
}

function checkEmptyError(listInput){
    let isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        console.log(input.value);
        if(!input.value){
            isEmptyError = true;
            showError(input, 'Khong duoc de trong')
        }
        else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmail(input){
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()
    let isEmptyEmail = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input)
    }else{
        showError(input, 'Error Email')
    }
    return isEmptyEmail
}

function checkLengthError(input, min , max){
    input.value = input.value.trim()

    if(input.value.length < min)
    {
        showError(input, `so ki tu phai lon hon ${min} ki tu `)
        return true
    }else if(input.value.length > max){
        showError(input, `so ki tu phai nho hon ${max} ki tu `)
        return true
    }else{
        showSuccess(input)
        return false
    }
}

function CheckMatchPasswordError(passwordInput, cfpasswordInput){
    if(passwordInput !== cfpasswordInput){
        showError(cfpasswordInput, 'Khong trun khop')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmptyEmail = checkEmail(email)
    let isUsernameLengthError = checkLengthError(username, 8, 13)
    let isPasswordLengthError = checkLengthError(password, 8, 13)
    let ischeckMatchPasswordError = CheckMatchPasswordError(password, confirmPassword)
})