var googleFinance = require('google-finance');

var symbol = {
  symbol: 'NASDAQ:AAPL'
}
var callback = function (err, news) {
	if(err){
		console.error("There was a problem")
		console.error(err);
	}else{

		console.log(news);
		console.log("Retrieved "+news.length+" articles.");
	}
}
googleFinance.companyNews(symbol, callback);