export default async function GetUserEvents(userId) {
    
    let url ='http://localhost:8080/event?location=&level=&month=&userId='+userId
    
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