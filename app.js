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
        casper.wait(3000, function() {
            casper.capture('logged-in.png');
            console.log('logged in');
        });
    });
}

log_in();

/*var logged_in = function () {
    var id = casper.getElementInfo('.ssc-un')
    console.log('got here', id);
}

logged_in();*/

casper.run();