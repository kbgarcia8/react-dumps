function stopPropagationonChild(e) {
    e.stopPropagation();
  }
function convertDate(inputDate) {
    const rawDate = new Date(inputDate)
    const formattedDate = `${rawDate.toLocaleString("default", {
    month: "short",
})} ${rawDate.getFullYear()}`
    return formattedDate
}

export {
    stopPropagationonChild,
    convertDate
}