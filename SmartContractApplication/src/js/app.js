App = {
      web3Provider: null,
      contracts: {},
      account: 0x0,

      init: function () {
            return App.initWeb3();
      },

      initWeb3: function () {
            // initialize web3
            if (typeof web3 !== 'undefined') {
                  //reuse the provider of the Web3 object injected by Metamask
                  App.web3Provider = web3.currentProvider;
            } else {
                  //create a new provider and plug it directly into our local node
                  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
            }
            web3 = new Web3(App.web3Provider);

            //   App.displayAccountInfo();

            return App.initContract();
      },


      initContract: function () {
            $.getJSON('../Insurance.json', function (InsuranceArtifact) {
                  // get the contract artifact file and use it to instantiate a truffle contract abstraction
                  App.contracts.Insurance = TruffleContract(InsuranceArtifact);
                  // set the provider for our contracts
                  App.contracts.Insurance.setProvider(App.web3Provider);
                  // retrieve the article from the contract
                  //     return App.reloadArticles();
            });
      },

      getInstance: function() {
            return App.contracts.Insurance;
      }

};

$(function () {
      $(window).load(function () {
            App.init();
      });
});