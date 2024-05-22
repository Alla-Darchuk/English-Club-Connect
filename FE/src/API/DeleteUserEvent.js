export default async function DeleteUsersEvent(userId, eventId) {
    
    let url ='http://localhost:8080/event/participate?userId='+userId+'&eventId='+eventId
    
    const response = await fetch(url, {
        method: 'DELETE'
    })
}