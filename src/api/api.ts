import axios from 'axios';
import {IModifiedEditState} from "../components/Editor/EditorTypes";

const instance = axios.create({
		baseURL: `http://localhost:3000/api/`,
});

export const setToken = (token: string) => {
		instance.defaults.headers.common['Authorization'] = `Token ${token}`
}

export const articlesAPI = {
		getGlobalArticles() {
				return instance.get(`articles`);
		},
		getYourArticles(author: string) {
				return instance.get(`articles?author=${author}`);
		},
		postArticle(article: IModifiedEditState) {
				return instance.post(`articles`, article)
		},
		favoriteArticle(slug: string) {
				return instance.post(`articles/${slug}/favorite`)
		},
		getArticle(slug: string) {
				return instance.get(`articles/${slug}`)
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

