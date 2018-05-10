
loginUser = function (email, password, callback) {
    alert("calling the contract");
    // console.log(App.getInstance());
    console.log(web3.eth.accounts[0]);
    console.log(email + password);
    App.getInstance().deployed().then(function (instance) {
        return instance.get_user({ from: web3.eth.accounts[0] });
    }).then(function (res) {
        console.log(JSON.stringify(res));
        return callback(res);
    }).catch(function (err) {
        console.log(err);
    });
}


registerUser = function (fname, lname, email, password, callback) {
    alert("calling the contract");
    // console.log(App.getInstance());
    console.log(web3.eth.accounts[0]);
    console.log(email + password);
    App.getInstance().deployed().then(function (instance) {
        return instance.register(fname, lname, email, password, {
            from: web3.eth.accounts[0],
            gas: 500000
        });
    }).then(function (res) {
        console.log(JSON.stringify(res));
        alert("registration success!!");
        return callback(JSON.stringify(res));
    }).catch(function (err) {
        console.log(err);
    });
}
