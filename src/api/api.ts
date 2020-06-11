import axios from 'axios';

const instance = axios.create({
		baseURL: `http://localhost:3000/api/`
});

export const articlesAPI = {
		getArticles() {
				return instance.get(`articles`);
		}
};
