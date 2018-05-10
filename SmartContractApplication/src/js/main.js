$(document).on('click', "#login-button", function () {
    var _email = $('#email').val();
    var _pass = $('#password').val();
    loginUser(_email, _pass, function (res) {
        console.log("res in login " + res);
        if (res[1] != "0x0000000000000000000000000000000000000000") {
            alert("You are already registered with this account");
            window.location.href = '/index.html';
        }
    });
});


$(document).on('click', "#register-button", function () {
    var _fname = $('#f_name').val();
    var _lname = $('#l_name').val();
    var _email = $('#r_email').val();
    var _pass = $('#r_password').val();
    
    // loginUser(_email, _pass, function (res) {
    //     console.log("res in login " + res);
    //     if (res[1] != "0x0000000000000000000000000000000000000000") {
    //         alert("You are already registered with this account");
    //         window.location.href = '/index.html';
    //     }
    //     else{
            registerUser(_fname, _lname, _email, _pass, function (res) {
                console.log("res in signup "+JSON.stringify(res));
                window.location.href = '/index.html';
            });
        // }
    // });
});
