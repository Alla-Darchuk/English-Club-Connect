export default async function DeleteSuggestion(suggestiontId) {
    
    let url ='http://localhost:8080/event/suggestion?suggestionId='+suggestiontId
    
    const response = await fetch(url, {
        method: 'DELETE'
    })
}