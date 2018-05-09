$(document).on('click', "#login-button", function () {
    var _email = $('#email').val();
    var _pass = $('#password').val();
    loginUser(_email, _pass);
});


$(document).on('click', "#register-button", function () {
    var _fname = $('#f_name').val();
    var _lname = $('#l_name').val();
    var _email = $('#r_email').val();
    var _pass = $('#r_password').val();
    registerUser(_fname, _lname, _email, _pass, function (res) {
        window.location.href = '/templates/homepage.html';
    });
    alert("got call back");
});
