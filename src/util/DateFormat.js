export default function format(utcDate){
    // Format date
    const date = new Date(utcDate)
    const formatDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000)
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(formatDate)
    const month = new Intl.DateTimeFormat('en', { month: 'long' }).format(formatDate)
    const day = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(formatDate)

    return `${month} ${day}, ${year}`
}