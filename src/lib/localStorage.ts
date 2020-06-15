export const setTokenLocalStorage = (token: string) => {
		localStorage.setItem('token', JSON.stringify(token));
}

export const getTokenLocalStorage = () => {
		return JSON.parse(localStorage.getItem('token') as string);
}
