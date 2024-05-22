export default async function AddParticipant(userId, eventId) {
    // console.log('in API user='+userId+' eventId= '+eventId)
    let url ='http://localhost:8080/event/participate?userId='+userId+'&eventId='+eventId
    console.log('url= '+url)
    const response = await fetch(url, {
        method: 'PUT'
    })
    // console.log(events)

    // return events
}