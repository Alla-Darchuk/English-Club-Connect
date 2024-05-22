export default async function GetLocations() {
    
    let url ='http://localhost:8080/location'
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const locations = await response.json()
    
    
    // console.log(locations)

    return locations
}
