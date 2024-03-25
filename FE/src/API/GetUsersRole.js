export default async function GetRole(user) {
    
    let url ='http://localhost:8080/login?user='+user.login+'&password='+user.password
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const role = await response.json()
    
    
    console.log('ROLE ='+role)

    return role
}