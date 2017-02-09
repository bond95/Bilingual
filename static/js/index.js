import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import Book from './components/book.jsx';
import Composition from './components/composition.jsx';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import sentenceReducer from './reducers/reducers';

window.$ = jQuery = require("jquery");

$(document).ready(function () {
	var mountBooks = function () {
		console.log($('.book'));
		$('.book').each(function (index) {
			var jThis = $(this);
			ReactDOM.render(<Book data-id={ jThis.attr('data-id') } data-title={ jThis.attr('data-title') } />, this);
		});
	}

	var mountComposition = function() {
		if ($('.composition').length) {
			let store = createStore(sentenceReducer, applyMiddleware(
    			thunkMiddleware
  			));

			var id = $($('.composition').get(0)).attr('data-id');
			ReactDOM.render(
				<Provider store={store}>
					<Composition dataId={id} />
				</Provider>, $('.composition').get(0));
		}
	}
	mountBooks();
	mountComposition();
});