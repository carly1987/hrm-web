import Api from './index';


export function getUserInfo (params = {}, suc, err) {
	return Api({
		api: 'getUserInfo',
		data: params
	}, (res) => {
		suc && suc(res);
	}, (err) => {
		err && err(err);
	});
}

export function save (params = {}, suc, err) {
	return Api({
		api: 'save',
		data: params,
		method: 'post'
	}, (res) => {
		suc && suc(res);
	}, (err) => {
		err && err(err);
	});
}