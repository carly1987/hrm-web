export function saveBase() {
	return function(dispatch) {
		dispatch({
			type: 'SAVE_BASE',
			data: '333'
		})
	}
}
