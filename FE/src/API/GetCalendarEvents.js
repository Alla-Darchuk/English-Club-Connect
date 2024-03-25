export default async function GetCalendarEvents(month) {
    
    let url ='http://localhost:8080/events?month='+month
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const events = await response.json()
    
    for (let i = 0; i < events.length; i++){
        events[i].date = new Date(events[i].date)
    }
    // console.log(events)

    return events
}