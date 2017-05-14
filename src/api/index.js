import Refetch from 'refetch';
// import ApiMap from './apimap';

function checkEnv() {
	const {
		location
	} = window;
	if(/localhost|127.0.0.1/.test(location.href)){
		return 'local';
	} else {
		return 'production';
	}
}

function mock (api) {
	return new Promise((resolve, reject) => {
		Refetch.get('../../mock/'+api+'.json', {}).then((res, xhr) => {
			resolve(res);
		}).catch((err) => {
			reject(err);
		});
	});
	
}

function fetch (params) {
	
}

export default function ajax (apiSchema, suc, err) {
	const env = checkEnv();
	let api = apiSchema.api;
	switch (env) {
		case 'local':
			mock(api).then((res) => {
				suc && suc(res);
			}, (err) => {
				err && err(err);
			});
			break;
		default:
			break;
	}
}