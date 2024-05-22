export default async function GetUser(userId) {
    
    let url ='http://localhost:8080/user?id='+userId
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const user = await response.json()
    
    
    // console.log('ROLE ='+role)

    return user
}