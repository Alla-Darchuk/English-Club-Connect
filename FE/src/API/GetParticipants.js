export default async function GetParticipants(eventId) {

    let url ='http://localhost:8080/user?eventId='+eventId
    // console.log('url= '+url)
    const response = await fetch(url, {
        method: 'GET'
    })
     let users = await response.json()
     console.log('user in response')
    console.log(users)
    return users
}