export default async function GetLevels() {
    
    let url ='http://localhost:8080/level'
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const level = await response.json()
    
    // console.log(level)

    return level
}