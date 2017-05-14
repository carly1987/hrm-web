const init = {
	stage: 'not save'
};

export default function baseReducer(state = init, action = {}) {
	switch (action.type) {
		case 'SAVE_BASE':
			return {
				stage: 'saved'
			};
		default:
			return state;
	}
}