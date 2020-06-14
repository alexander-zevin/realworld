export const convertDate = (date: string) => {
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    const newDate = new Date(date)
    return `${months[newDate.getMonth()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
}