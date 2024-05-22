export default async function AddSuggestion(suggestion) {

    let url ='http://localhost:8080/event/suggestion'
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(suggestion)
    })
}