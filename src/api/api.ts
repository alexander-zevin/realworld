import axios from 'axios';
import {ModifiedEditState} from "../components/NewArticle/Editor/EditorTypes";
import {SettingsState} from "../components/Settings/SettingsTypes";

const instance = axios.create({
    baseURL: `http://localhost:3000/api/`,
});

export const setToken = (token: string) => {
    instance.defaults.headers.common['Authorization'] = `Token ${token}`
}

export const articlesAPI = {
    getGlobalArticles(offset: number, limit: number) {
        console.log(offset + ' ' + limit)
        return instance.get(`articles?offset=${offset}&limit=${limit}`);
    },
    getMyArticles(author: string, offset: number, limit: number) {
        return instance.get(`articles?author=${author}&offset=${offset}&limit=${limit}`);
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
    feedArticles(offset: number, limit: number) {
        return instance.get(`articles/feed?offset=${offset}&limit=${limit}`)
    },
    getGlobalArticlesByTag(tag: string, offset: number, limit: number) {
        return instance.get(`articles?tag=${tag}&offset=${offset}&limit=${limit}`);
    },
    getFavoritedArticles(favorited: string, offset: number, limit: number){
        return instance.get(`articles?favorited=${favorited}&offset=${offset}&limit=${limit}`);
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
    },
    updateUser(user: SettingsState) {
        return instance.put(`user`, {user: user})
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

export const commentsAPI = {
    postComment(slug: string, body: string) {
        return instance.post(`articles/${slug}/comments`, {
            comment: {
                body: body
            }
        })
    },
    getComments(slug: string) {
        return instance.get(`articles/${slug}/comments`)
    },
    deleteComment(slug: string, id: number){
        return instance.delete(`articles/${slug}/comments/${id}`)
    }
}

