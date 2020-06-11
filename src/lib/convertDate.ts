export const convertDate = (date: string) => {
		const months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];
		return `${ months[new Date(date).getMonth()]} ${new Date(date).getDate()}, ${new Date(date).getFullYear()}`
}