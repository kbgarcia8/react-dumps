//creates a temporary div with scroll bar to get scroll bar width based on the current styling or OS/browser
export const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.style.width = "100px";
    scrollDiv.style.height = "100px";
    scrollDiv.style.overflow = "scroll";
    scrollDiv.style.position = "absolute";
    scrollDiv.style.top = "-9999px";

    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
};

export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    
    const options = { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: true };
    
    return date.toLocaleString("en-US", options).replace(",", "");
};

export default { getScrollbarWidth, formatDate };