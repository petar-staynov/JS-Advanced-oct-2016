function validate() {
    let userRegex = /^[a-zA-Z0-9]{3,20}$/;
    let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/;
    let emailRegex = /^.*@.*?\..*?$/;
    let companyShitReg = /^[1-9][1-9][1-9][1-9]$/;
    $("#registerForm").submit(function(e) {
        e.preventDefault();
    });
    $('input#company').change(function () {
        if($('#company').attr('checked','checked')){
            $('#companyInfo').attr('style','display-inline');
        }
        if($('#company').not(':checked').length){
            $('#companyInfo').attr('style','display:none');
        }
    });
    $('#submit').click(function () {
        let counter = 0;
        let username = $('input#username').val();
        let password = $('input#password').val();
        let confirmPassword = $('input#confirm-password').val();
        let email = $('input#email').val();
        let compNumber = $('input#companyNumber').val();
        if (password != confirmPassword) {
            $('input#confirm-password').attr('style', 'border-color: red;');
            $('input#password').attr('style', 'border-color: red;');
            counter++;
        }
        else {
            $('input#confirm-password').removeAttr('style');
            $('input#password').removeAttr('style');
            counter = 0;
        }
        if (!username.match(userRegex)) {
            $('input#username').attr('style', 'border-color: red;');
        }
        else {
            $('input#username').removeAttr('style');
        }
        if (!password.match(passwordRegex)) {
            $('input#password').attr('style', 'border-color: red;')
        }
        else {
            if (counter == 0) {
                $('input#password').removeAttr('style');
            }
        }
        if (!confirmPassword.match(passwordRegex)) {
            $('input#confirm-password').attr('style', 'border-color: red;');
        }
        else {
            if (counter == 0) {
                $('input#confirm-password').removeAttr('style');
            }
        }
        if (!email.match(emailRegex)) {
            $('input#email').attr('style', 'border-color: red;');
        }
        else {
            $('input#email').removeAttr('style');
        }
        if ($('#company').is(':checked')) {
            if (!compNumber.match(companyShitReg)) {
                $('input#companyNumber').attr('style', 'border-color: red;');
            }
            else {
                $('input#companyNumber').removeAttr('style');
            }
        }
        if ($('#company').is(':checked')) {
            if (!$('input#confirm-password').is('[style]')
                && !$('input#username').is('[style]')
                && !$('input#password').is('[style]')
                && !$('input#email').is('[style]')
                && !$('input#companyNumber').is('[style]')) {
                $('#valid').attr('style', 'display-inline');
            }
            else $('#valid').attr('style', 'display:none');
        }
        else if (!$('#company').is(':checked')) {
            if (!$('input#confirm-password').is('[style]')
                && !$('input#username').is('[style]')
                && !$('input#password').is('[style]')
                && !$('input#email').is('[style]')) {
                $('#valid').attr('style', 'display-inline');
            }
            else $('#valid').attr('style', 'display:none');
        }
    });
}