/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function () {
	this.jumbEl = element(by.css('.jumbotron'));
	this.h1El = this.jumbEl.element(by.css('h1'));
	this.h1SpanEl = this.h1El.element(by.css('span'));
	//this.imgEl = this.jumbEl.element(by.css('img'));
	this.thumbnailEls = element(by.css('body')).all(by.repeater('newsArticle in main.newsArticles'));
};

module.exports = new MainPage();
