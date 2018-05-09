
loginUser = function (email, password) {
    alert("calling the contract");
    // console.log(App.getInstance());
    console.log(web3.eth.accounts[0]);
    console.log(email + password);
    App.getInstance().deployed().then(function (instance) {
        instance.get_user({ from: web3.eth.accounts[0] });
    }).then(function (res) {
        if (res === undefined) {
            alert("you have not signed in please sign in come back");
            window.location.href = '/templates/register.html';
        }
        else {
            alert("login success!!");
            window.location.href = '/templates/homepage.html';
        }
    }).catch(function (err) {
        console.error(err);
    });
}


registerUser = function (fname, lname, email, password, callback) {
    alert("calling the contract");
    // console.log(App.getInstance());
    console.log(web3.eth.accounts[0]);
    console.log(email + password);
    App.getInstance().deployed().then(function (instance) {
        instance.register(fname, lname, email, password, {
            from: web3.eth.accounts[0],
            gas: 500000
        });
    }).then(function (res) {
        console.log(JSON.stringify(res));
        alert("registration success!!");
        return callback(JSON.stringify(res));
    }).catch(function (err) {
        console.error(err);
    });
}
