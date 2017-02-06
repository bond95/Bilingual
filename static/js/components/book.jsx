import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
	render() {
		return (<a href={"/composition/" + this.props['data-id']} className="collection-item">{ this.props['data-title'] }</a>);
	}
}

export default Book;