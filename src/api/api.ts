import axios from 'axios';

const instance = axios.create({
		withCredentials: true,
		baseURL: `https://localhost:3000/api/`,
});

export const articlesAPI = {
		getArticles() {
				return instance.get(`articles`);
		},
};
