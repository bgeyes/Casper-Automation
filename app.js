var casper = require("casper").create()

var xpath = require("casper").selectXPath;

casper.userAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36');

var startApp = function() {
    casper.start('https://www.betfair.com/sport/inplay')
}

startApp();

var log_in = function () {
    casper.then(function () {
        this.sendKeys('#ssc-liu', 'ionathanr@gmail.com');
        console.log('\n\ncopied username');
        this.sendKeys('#ssc-lipw', '***');
        console.log('\n\ncopied password');
        casper.capture('login.png');
        casper.thenClick(xpath('//*[@id="ssc-lis"]'), function() {
	       console.log('logging in...');
        });
        casper.wait(4000, function() {
            casper.capture('logged-in.png');
            console.log('logged in');
        });
    });
}

log_in();

var odds = [];
var links = [];
var get_odds = function() {
	casper.then(function() {
	odds = this.getElementsInfo('.mod-inplaysports .ui-runner-price');
    links = this.getElementsInfo('.mod-inplaysports .com-bet-button.ui-bet-button');

	console.log("got here")

	casper.then(function() {
		for (var i = 0; i < odds.length; i++) {
			if (parseInt(odds[i]["text"]) < 2) {
				console.log(odds[i]["text"]);
                //console.log(links[i]["tag"]);
                casper.then(function() {
                    //this.click(xpath('//*[@id="' + links[i]["attributes"]["id"] + '"]'));
                    this.click(xpath('//*[@id="yui_3_5_0_1_1459860967410_165278"]'), function () {
                        console.log("clicked");
                    });
                });
				casper.capture("clicking.png");
			}
			else {
				console.log("greater");
			}
		}
	})
})
};
  
casper.then(function () {
    this.click(xpath('//*[@id="yui_3_5_0_1_1459866610881_17262"]'));
    console.log("clicked");
})  


get_odds();



casper.run();