import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Sentence from './sentence';
import { sentenceClick, fetchSentences } from '../action/actions.jsx';

class Composition extends React.Component {
	constructor(props) {
		super();
		this.renderItems = this.renderItems.bind(this);
		this.checkActivity = this.checkActivity.bind(this);
	}

	componentDidMount() {
		this.props.fetchSentences(this.props.dataId);
	}

	renderItems() {
		var items = [];
		console.log(this.props);
		for (var i in this.props.sentences) {
			items.push(<tr key={'paragraph' + i}>
				<Sentence
					onSentenceClick={this.props.onSentenceClick}
					data={this.props.sentences[i][this.props.language1]}
					sentences={ this.props.sentences }
					sentence={ i }
					language={ this.props.language1 }
					key="language1"
					checkActivity={ this.checkActivity }

				/>
				<Sentence
					onSentenceClick={this.props.onSentenceClick}
					data={this.props.sentences[i][this.props.language2]}
					sentence={ i }
					sentences={ this.props.sentences }
					language={ this.props.language2 }
					key="language2"
					checkActivity={ this.checkActivity }
				/>
			</tr>);
		}
		return items;
	}

	checkActivity(language, sent, part) {
		if (this.props.active.sentence === sent
			&& this.props.active.part === part
			&& this.props.active.language === language) {
			return 'activate';
		} else {
			return '';
		}
	}

	render() {
		var items = this.renderItems();
		return (<table className="bordered">
			<tbody>
			{ items }
			</tbody>
			</table>);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		sentences: state.sentences,
		language1: state.language1,
		language2: state.language2,
		active: {
			language: state.language,
			part: state.part,
			sentence: state.sentence
		}
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSentenceClick: (language, sentence, part, sentences) => {
			console.log('1', ownProps);
			dispatch(sentenceClick(language, sentence, part, sentences));
		},
		fetchSentences: (id) => {
			dispatch(fetchSentences(id));
		}
	}
}

const ReduxedComposition = connect(
	mapStateToProps,
	mapDispatchToProps
)(Composition);

export default ReduxedComposition;