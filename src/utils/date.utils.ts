export const DateUtils = {
    getCurrentDayName,
    getCurrentDayNumber,
    getCurrentMonthName,
    getCurrentTime
}

function getCurrentDayName(): string {
    const date = new Date();
    return date.toLocaleDateString("en-US", { weekday: 'long' });
}

function getCurrentMonthName(): string {
    const date = new Date();
    return date.toLocaleDateString("en-US", { month: 'long' });
}

function getCurrentDayNumber(): number {
    const date = new Date()
    return date.getDate();
}

function getCurrentTime(date: Date): string {
    return date.toLocaleTimeString([], {hour: '2-digit', minute: "2-digit", hour12: true}).replace(/\s/g, "");
}