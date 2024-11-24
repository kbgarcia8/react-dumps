export function convertDate(inputDate) {
    const rawDate = new Date(inputDate)
    const formattedDate = `${rawDate.toLocaleString("default", {
    month: "short",
})} ${rawDate.getFullYear()}`
    return formattedDate
}