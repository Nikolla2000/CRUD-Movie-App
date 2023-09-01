const makeRequest = async (url, method, body) => {
	return await fetch(url, {
		method,
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => {
		if (!res.ok) {
			return Promise.reject(res.statusText);
		}
		try {
			if ('json' in res) {
				return res.json();
			}
			return res.ok;
		} catch (error) {
			return true;
		}
	});
};

export default makeRequest;
