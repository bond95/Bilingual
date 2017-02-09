import React from 'react';
import ReactDOM from 'react-dom';

class Sentence extends React.Component {
	constructor(props) {
		super();
		this.renderSeparateSentences = this.renderSeparateSentences.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(part) {
		return ((part) => {
			return () => { this.props.onSentenceClick(this.props.language, this.props.sentence, part, this.props.sentences); };
		})(part);
	}

	renderSeparateSentences() {
		var items = [];
		for (var i in this.props.data) {
			items.push(<span
				key={'sentence' + i}
				className={ this.props.checkActivity(this.props.language, this.props.sentence, i) }
				onClick={ this.handleClick(i) }
			>
				{ this.props.data[i] }
			</span>);
		}
		return items;
	}

	render() {
		var items = this.renderSeparateSentences();
		return (<td>
			{ items }
			</td>);
	}
}

export default Sentence;