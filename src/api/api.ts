import axios from 'axios';
import {setTokenLocalStorage} from "../lib/localStorage";

const instance = axios.create({
		baseURL: `http://localhost:3000/api/`,
		/*headers: {
				'Authorization': `${getTokenLocalStorage()}`
		}*/
});

export const setToken = (token: string) => {
		axios.defaults.headers.common['Authorization'] = token
		setTokenLocalStorage(token)
}

export const articlesAPI = {
		getGlobalArticles() {
				return instance.get(`articles`);
		},
		getYourArticles(author: string) {
				return instance.get(`articles?author=${author}`);
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
		},
		getUser() {
				return instance.get(`user`);
		}
};

