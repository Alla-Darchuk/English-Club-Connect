export default function GetTimeString(date) {
    
    let time = ''
    let hours = date.getHours()
    let minutes = date.getMinutes()


    if (hours < 10) {
        hours= '0'+hours
    }
    
    if (minutes < 10) {
        minutes= '0'+minutes
    }

    time = hours+':'+minutes
    return time
}