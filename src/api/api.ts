import axios from 'axios';

const instance = axios.create({
		baseURL: `http://localhost:3000/api/`
});

export const articlesAPI = {
		getArticles() {
				return instance.get(`articles`);
		}
};

export const tagsAPI = {
		getTags() {
				return instance.get(`tags`);
		}
};

export const usersAPI = {
		signUp(username: string, email: string, password: string) {
				return instance.post(`users`, {
						user: {
								username: username,
								email: email,
								password: password
						}
				})
		},
		signIn(email: string, password: string) {
				return instance.post(`users/login`, {
						user: {
								email: email,
								password: password
						}
				})
		}
};
