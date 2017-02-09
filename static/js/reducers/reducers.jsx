import { 
	ACTION_JOIN_SENTENCES,
	ACTION_SELECT_SENTENCE,
	ACTION_UPDATE_SENTENCES,
	ACTION_UPDATE_LANGUAGES,
	ACTION_DEFAULT_STATE
} from '../constants/constants';

var initState = {
	state: ACTION_DEFAULT_STATE,
	sentences: [],
	isUpdated: false
};

export default function sentenceReducer(state = initState, action) {
	switch (action.type) {
		case ACTION_SELECT_SENTENCE:
			return Object.assign({}, state, {
		        language: action.language,
		        part: action.part,
		        sentence: action.sentence,
		        state: ACTION_SELECT_SENTENCE
		    });
		case ACTION_UPDATE_SENTENCES:
			return Object.assign({}, state, {
		        state: ACTION_DEFAULT_STATE,
		        sentences: action.sentences,
		        isUpdated: true,
		        language: ''
		    });
		case ACTION_UPDATE_LANGUAGES:
			return Object.assign({}, state, {
		        state: ACTION_DEFAULT_STATE,
		        language1: action.language1,
		        language2: action.language2,
		    });
		default:
			return state; 
	}
}