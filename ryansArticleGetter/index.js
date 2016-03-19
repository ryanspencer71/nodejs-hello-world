var googleFinance = require('google-finance');
 var symble = {
 	symbol: 'NASDAQ:AAPL'
 }
 var callback = function (err, news){
 	if(err){
 		console.error("there was an error with function")
 		console.error(err);

 	}else{
 		console.log(news);
 	}
 }
googleFinance.companyNews(symble, callback)
