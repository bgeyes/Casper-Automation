var casper = require("casper").create()

var xpath = require("casper").selectXPath;

casper.userAgent('Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36');

casper.start('https://www.betfair.com/sport/inplay');

casper.then(function () {
	this.sendKeys('#ssc-liu', 'ionathanr@gmail.com');
	console.log('\n\ncopied username');
	this.sendKeys('#ssc-lipw', 'prisma01');
	console.log('\n\ncopied password');
	casper.capture('login.png');
});

casper.thenClick(xpath('//*[@id="ssc-lis"]'), function() {
	console.log('logging in...');
})

casper.wait(5000, function() {
	casper.capture('logged-in.png');
	console.log('logged in');
})

casper.run();