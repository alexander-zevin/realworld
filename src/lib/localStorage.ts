export const setTokenLocalStorage = (token: string) => {
		localStorage.setItem('Authorization', JSON.stringify(token));
}

export const getTokenLocalStorage = () => {
		return JSON.parse(localStorage.getItem('Authorization') as string);
}
