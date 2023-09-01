import makeRequest from './makeRequest';

const apiMovies = {
	getAll: () => {
		return makeRequest('/api/v1/movies', 'GET');
	},
	getById: (movieId) => {
		return makeRequest(`/api/v1/movies/${movieId}`, 'GET');
	},
	create: (title, description, posterUrl, youtubeId) => {
		return makeRequest('/api/v1/movies', 'POST', {
			title,
			description,
			posterUrl,
			youtubeId,
		});
	},
	edit: (movieId, title, description, posterUrl, youtubeId) => {
		return makeRequest(`/api/v1/movies/${movieId}`, 'PUT', {
			title,
			description,
			posterUrl,
			youtubeId,
		});
	},
	delete: (movieId) => {
		return makeRequest(`/api/v1/movies/${movieId}`, 'DELETE');
	},
	rate: (movieId, rating) => {
		return makeRequest(`/api/v1/movies/${movieId}/rate`, 'POST', { rating });
	},
	comment: (movieId, author, content) => {
		return makeRequest(`/api/v1/movies/${movieId}/comment`, 'POST', {
			author,
			content,
		});
	},
};

export default apiMovies;
