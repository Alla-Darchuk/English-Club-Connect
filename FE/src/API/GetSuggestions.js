export default async function getSuggestions() {
    
    let url ='http://localhost:8080/event/suggestion'
    
    const response = await fetch(url, {
        method: 'GET'
    })
    const suggestions = await response.json()

    return suggestions
}