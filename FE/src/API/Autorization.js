export default async function Autorization(user) {
    
    let url ='http://localhost:8080/login?login='+user.login+'&password='+user.password
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const userFirstInformation = await response.json()
    
    
    //  console.log(userFirstInformation)

    return userFirstInformation
}