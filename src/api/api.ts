import axios from 'axios';
import {ModifiedEditState} from "../components/Editor/EditorTypes";

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
		postArticle(article: ModifiedEditState) {
				return instance.post(`articles`, article)
		},
		favoriteArticle(slug: string) {
				return instance.post(`articles/${slug}/favorite`)
		},
		unFavoriteArticle(slug: string) {
				return instance.delete(`articles/${slug}/favorite`)
		},
		getArticle(slug: string) {
				return instance.get(`articles/${slug}`)
		},
		feedArticles() {
				return instance.get(`articles/feed`)
		},
		getGlobalArticlesByTag(tag: string) {
				return instance.get(`articles?tag=${tag}`);
		},
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

export const profileAPI = {
		follow(username: string) {
				return instance.post(`profiles/${username}/follow`)
		},
		unfollow(username: string) {
				return instance.delete(`profiles/${username}/follow`)
		}
}

