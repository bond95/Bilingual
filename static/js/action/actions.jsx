import { 
	ACTION_JOIN_SENTENCES,
	ACTION_SELECT_SENTENCE,
	ACTION_UPDATE_SENTENCES,
	ACTION_UPDATE_LANGUAGES
} from '../constants/constants';

export const sentenceClick = (language, sentence, part, sentences) => {
	return (dispatch, getState) => {
		if (getState().state === ACTION_SELECT_SENTENCE) {
			dispatch(joinSentences(language, sentence, part, sentences));
		} else {
			dispatch(selectSentence(language, sentence, part, sentences));
		}
	};
}


export const selectSentence = (language, sentence, part, sentences) => {
	return {
		type: ACTION_SELECT_SENTENCE,
		language: language,
		sentence: sentence,
		part: part,
		sentences: sentences
	};
}

export const updateSentences = (sentences) => {
	return {
		type: ACTION_UPDATE_SENTENCES,
		sentences: sentences
	};
}

export const updateLanguages = (language1, language2) => {
	return {
		type: ACTION_UPDATE_LANGUAGES,
		language1: language1,
		language2: language2
	};
}

export const fetchSentences = (id) => {
	return (dispatch, getState) => {
		if (!getState().isUpdated) {
			$.getJSON('/get-composition/' + id, {}, function (json) {
				dispatch(updateSentences(json.sentences));
				dispatch(updateLanguages(json.language1, json.language2));
			});
		}
	};
}

export const joinSentences = (language, sentence, part, sentences) => {
	return (dispatch, getState) => {
		if (getState().language !== language) {
			var sentenceText = sentences[getState().sentence][getState().language][getState().part];
			if (sentence > getState().sentence) {
				sentences[sentence][getState().language].unshift(sentenceText);
			} else {
				sentences[sentence][getState().language].push(sentenceText);
			}
			sentences[getState().sentence][getState().language].splice(getState().part, 1);
			dispatch(updateSentences(sentences));
		}
	};
};