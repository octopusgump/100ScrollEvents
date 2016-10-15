$(document).ready(function() {

	skrollr.init();
	var tenID = [
	's221',
	's222',
	's223',
	's224',
	's225',
	's226',
	's227',
	's228',
	's229',
	's2210'
	];

	var seventyID =[
	's29',
	's30',
	's31',
	's32',
	's33',
	's34',
	's35',
	's36',
	's37',
	's38',
	's39',
	's40',
	's41',
	's42',
	's43',
	's44',
	's45',
	's46',
	's47',
	's48',
	's49',
	's50',
	's51',
	's52',
	's53',
	's54',
	's55',
	's56',
	's57',
	's58',
	's59',
	's60',
	's61',
	's62',
	's63',
	's64',
	's65',
	's66',
	's67',
	's68',
	's69',
	's70',
	's71',
	's72',
	's73',
	's74',
	's75',
	's76',
	's77',
	's78',
	's79',
	's80',
	's81',
	's82',
	's83',
	's84',
	's85',
	's86',
	's87',
	's88',
	's89',
	's90',
	's91',
	's92',
	's93',
	's94',
	's95',
	's96',
	's97',
	's98',
	's99',
	's100'
	];

var allID =[
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
	'twenty',
	'twentyOne',
	'twentyTwo',
	'twentyThree',
	'twentyFour',
	'twentyFive',
	'twentySix',
	'twentySeven',
	'twentyEight',
	'twentyNine',
	'thirty',
	'thirtyOne',
	'thirtyTwo',
	'thirtyThree',
	'thirtyFour',
	'thirtyFive',
	'thirtySix',
	'thirtySeven',
	'thirtyEight',
	'thirtyNine',
	'forty',
	'fortyOne',
	'fortyTwo',
	'fortyThree',
	'fortyFour',
	'fortyFive',
	'fortySix',
	'fortySeven',
	'fortyEight',
	'fortyNine',
	'fifty',
	'fiftyOne',
	'fiftyTwo',
	'fiftyThree',
	'fiftyFour',
	'fiftyFive',
	'fiftySix',
	'fiftySeven',
	'fiftyEight',
	'fiftyNine',
	'sixty',
	'sixtyOne',
	'sixtyTwo',
	'sixtyThree',
	'sixtyFour',
	'sixtyFive',
	'sixtySix',
	'sixtySeven',
	'sixtyEight',
	'sixtyNine',
	'seventy',
	'seventyOne',
	'seventyTwo',
	'seventyThree',
	'seventyFour',
	'seventyFive',
	'seventySix',
	'seventySeven',
	'seventyEight',
	'seventyNine',
	'eighty',
	'eightyOne',
	'eightyTwo',
	'eightyThree',
	'eightyFour',
	'eightyFive',
	'eightySix',
	'eightySeven',
	'eightyEight',
	'eightyNine',
	'ninety',
	'ninetyOne',
	'ninetyTwo',
	'ninetyThree',
	'ninetyFour',
	'ninetyFive',
	'ninetySix',
	'ninetySeven',
	'ninetyEight',
	'ninetyNine',
	'oneHundred'
	];

	for (i = 0; i < 100; i++) {
		var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
		$("#" +  allID[i]).css({'background': hue});
		$("#" +  allID[i]).css({'background': hue});
	}

//	for (a = 0; a < 70; a++) {
//		var randomMove = 'transform:translateX(' + (Math.floor(Math.random()* 100))+');'
//		$("#" + seventyID[a]).css({"data-0" + randomMove});
//		$("#" + seventyID[a]).css({"data-900p=" + randomMove});
//	}
	for (a = 0; a < 10; a++) {
	var randomMove = (Math.floor(Math.random()* 900));
	$("." + tenID[a]).css({"left": randomMove});
}
	for (a = 0; a < 10; a++) {
	var randomMove = (Math.floor(Math.random()* 900));
	$("." + tenID[a]).css({"right": randomMove});
}
	for (a = 0; a < 10; a++) {
	var randomMove = (Math.floor(Math.random()* 700));
	$("." + tenID[a]).css({"top": randomMove});
}
	for (a = 0; a < 10; a++) {
	var randomMove = (Math.floor(Math.random()* 700));
	$("." + tenID[a]).css({"bottom": randomMove});
}
});


