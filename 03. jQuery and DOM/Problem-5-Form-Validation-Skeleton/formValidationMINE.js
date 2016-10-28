function validate() {
    let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/;
    let emailRegex = /^.*@+.*\.+.*$/;
    let companyRegex = /^[1-9][1-9][1-9][1-9]$/;

    //Prevents page load on submit button click
    $('#registerForm').submit(function (ev) {
        ev.preventDefault();
    });

    let validUsername = false;
    let validEmail = false;
    let validPass = false;
    let validCompany = true;

    //Company checkbox
    $('#company').change(function() {
        if (this.checked) {
            $('#companyInfo').css('display', 'block');
            validCompany = false;
        }
        else {
            $('#companyInfo').css('display', 'none');
            validCompany = true;
        }
        $('#submit').on('click', function () {
            //COMPANY INFO
            let companyInfo = $('#companyNumber');

            if (!companyInfo.val().match(companyRegex)){
                companyInfo.attr('style','border-color: red;');
                validCompany = false;
            }
            else if (companyInfo.val().match(companyRegex)){
                companyInfo.removeAttr('style');
                validCompany = true;
            }
        });
    });

    $('#submit').on('click', function () {
        validate();
        let username = $('#username');
        let email = $('#email');
        let password = $('#password');
        let confirmPass = $('#confirm-password');

        //USERNAME
        if (!username.val().match(usernameRegex)){
            username.attr('style','border-color: red;');
            validUsername = false;

        }
        else if (username.val().match(usernameRegex)){
            username.removeAttr('style');
            validUsername = true;
        }

        //EMAIL
        if (!email.val().match(emailRegex)){
            email.attr('style','border-color: red;');
            validEmail= false;

        }
        else if (email.val().match(emailRegex)){
            email.removeAttr('style');
            validEmail = true;
        }

        //PASSWORD

        //CONFIRMPASS vs PASS
        if (confirmPass.val() != password.val()){
            password.attr('style','border-color: red;');
            confirmPass.attr('style','border-color: red;');
            validPass = false
        }
        else if (confirmPass.val() == password.val()){
            if (!password.val().match(passwordRegex)){
                password.attr('style','border-color: red;');
                confirmPass.attr('style','border-color: red;');
                validPass = false;

            }
            else if (password.val().match(passwordRegex)){
                password.removeAttr('style');
                confirmPass.removeAttr('style');
                validPass = true;
            }
        }
        if (validUsername && validEmail && validPass && validCompany){
            console.log('allvalid');
            $('#valid').attr('style', 'display: block')
        }
        else $('#valid').attr('style', 'display: none');
    });
}