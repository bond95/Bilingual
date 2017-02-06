import React from 'react';
import ReactDOM from 'react-dom';
import Book from './components/book.jsx';

window.$ = jQuery = require("jquery");

$(document).ready(function () {
	var mountBooks = function () {
		console.log($('.book'));
		$('.book').each(function (index) {
			var jThis = $(this);
			ReactDOM.render(<Book data-id={ jThis.attr('data-id') } data-title={ jThis.attr('data-title') } />, this);
		});
	}
	mountBooks();
});